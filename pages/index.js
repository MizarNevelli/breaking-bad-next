import Head from 'next/head'
import { fetchCharacters } from '../fetch/fetchCharacters'
import { useContext, useEffect, useState } from 'react'
import { CharactersContext } from '../context/index'
import CardList from '../components/CardList'
import SearchField from '../components/SearchField'

const HomePage = (props) => {
  const { data = [] } = props;
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { items, setItems, favoritesChar } = useContext(CharactersContext);
  // console.log('favoritesChar', favoritesChar)

  const updateData = async () => {
    setIsLoading(true)
    try {
      const favoritesIds = favoritesChar.map(fav=>fav.char_id)
      const allCharacters = await fetchCharacters(query);
      console.log('allCharacters', allCharacters)
      //FIX: KEEP THE PREVIOUSLY FAVORITES STATE UP TO DATE WITH ITEMS
      const merged = allCharacters.map((item) => {
        if (favoritesIds.includes(item.char_id)) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });

      setItems(merged)
    } catch (err) {
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    updateData()
  }, [query])

  useEffect(() => {
    setItems(data)
  }, [])

  const onSearchChange = (value) => {
    setQuery(value)
  }

  return (
    <>
      <Head>
        <title>Breaking Bad</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='container'>
        <SearchField onSearchChange={onSearchChange} showTextInput={true} />
        <CardList items={items} isLoading={isLoading} />
      </div>
    </>
  )
}

export async function getServerSideProps() {

  const data = await fetchCharacters()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // data will be passed to the page component as props
  }
}

export default HomePage
