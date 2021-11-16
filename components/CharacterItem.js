import React, { useContext } from "react";
import { CharactersContext } from "../context";

const CharacterItem = ({ item }) => {
    const { toggleFavorite = {}, favoritesChar = [] } = useContext(CharactersContext);
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front" >
                    <img src={item.img ? item.img : '/placeholder.png'} alt="" />
                </div>
                <div className="card-back">
                    <h1>{item.name}</h1>
                    <div className='list'>
                        <p>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </p>
                        <p>
                            <strong>Nickname:</strong> {item.nickname}
                        </p>
                        <p>
                            <strong>Birthday:</strong> {item.birthday}
                        </p>
                        <p>
                            <strong>Status:</strong> {item.status}
                        </p>
                    </div >
                    <button className="btn" onClick={() => toggleFavorite(item.char_id)}>
                        {item.isFavorite || (favoritesChar.some((el) => { return el.char_id === item.char_id })) ? "Remove from Favorite" : "Add to Favorite"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CharacterItem;