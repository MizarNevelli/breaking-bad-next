import axios from 'axios';

export const fetchCharacters = async (name = '') => {

    const url = `https://www.breakingbadapi.com/api/characters?name=${name}`;
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.log(error);
        throw error
    }
};