import axios from "axios";
import { Character, CharacterDetailResponse, CharacterApiResponse } from "../types";

export const http = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        'Content-type': 'application/json',
    },
});

const getAllCharacters = async (): Promise<CharacterApiResponse> => {
    const response = await http.get<CharacterApiResponse>(`/character`);
    return response.data;
}

const getCharacterById = async (id:string) => {
    return await http.get<CharacterDetailResponse>(`/character/${id}`);
}

export {getAllCharacters, getCharacterById}