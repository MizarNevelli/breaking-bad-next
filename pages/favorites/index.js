import { useContext } from 'react'
import CharacterItem from '../../components/CharacterItem'
import { CharactersContext } from '../../context'
import SearchField from '../../components/SearchField'

const Favorites = () => {
  const { favoritesChar } = useContext(CharactersContext);

  return (
    <div className='container'>
      <SearchField showTextInput={false} isFavoritePage={true} />

      {favoritesChar.length === 0 &&
        <h2>You don't have any favorite character yet!</h2>
      }
      <section className="cards">
        {favoritesChar?.map((item) => (
          <CharacterItem key={item.char_id} item={item} ></CharacterItem>
        ))}
      </section>
    </div>
  )
}

export default Favorites
