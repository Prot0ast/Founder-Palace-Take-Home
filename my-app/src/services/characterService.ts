import axios from "axios";
import { Character, CharacterDetailResponse } from "../types";

export const http = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        'Content-type': 'application/json',
    },
});

const getAllCharacters = async () => {
    return await http.get<Array<Character>>('/character');
}

const getCharacterById = async (id:string) => {
    return await http.get<CharacterDetailResponse>(`/character/${id}`);
}

export {getAllCharacters, getCharacterById}