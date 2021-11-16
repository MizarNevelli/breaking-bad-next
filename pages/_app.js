import { CharactersProvider } from '../context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <CharactersProvider>
      <Component {...pageProps} />
    </CharactersProvider>
  )
}

export default MyApp
