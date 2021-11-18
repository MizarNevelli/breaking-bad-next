import { createContext, useState } from "react";

const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [favoritesChar, setFavoritesChar] = useState([]);

  const toggleFavorite = (id) => {
    const updateItems = items.map((item) => {
      if (item.char_id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    setItems(updateItems);
    const favorites = updateItems.filter(item => item.isFavorite)
    setFavoritesChar(favorites)
  };

  const resetFavorites = () => {
    setFavoritesChar([])
    items.forEach(item=>item.isFavorite=false)
    setItems(items)
  }

  return (
    <CharactersContext.Provider
      value={{
        items,
        setItems,
        favoritesChar,
        toggleFavorite,
        resetFavorites
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};


export { CharactersProvider, CharactersContext };
