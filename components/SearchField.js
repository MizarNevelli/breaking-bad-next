import React, { useContext } from "react";
import { CharactersContext } from "../context";
import Image from 'next/image'
import Link from 'next/link'

const SearchField = ({ onSearchChange = {}, showTextInput = true, isFavoritePage = false }) => {

    return (
        <>
            <div className='logo-wrap'>
                <Image
                    src='/logo-bb.png'
                    height='200'
                    width='350'
                />
            </div>
            {!isFavoritePage ?
                (<Link href="/favorites">
                    <div className='link-to-favorites'>
                        Go to Favorites Characters
                    </div>
                </Link>) :
                (<Link href="/">
                    <div className='link-to-favorites'>
                        go back to home
                    </div>
                </Link>)
            }

            {
                showTextInput &&
                (<div className='input-wrap'>
                    <input
                        type='text'
                        onChange={(e) => {
                            onSearchChange(e.target.value)
                        }}
                        placeholder='Search Character'
                    />
                </div>)
            }
        </>
    );
};

export default SearchField;