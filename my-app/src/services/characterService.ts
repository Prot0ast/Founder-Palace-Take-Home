import axios from "axios";

export const http = axios.create({
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:3000/"
    },
});

const getAllCharacters = async () => {
    let characters = await fetch('https://rickandmortyapi.com/api/character');
    let resp = await characters.json();
    return resp;
}

//TODO: switch to ID!!!
const getCharacterByName = async (name: string) => {
    let character = await fetch('https://rickandmortyapi.com/api/character/${name}');
    let resp = await character.json();
    return resp;
}

export {getAllCharacters, getCharacterByName};