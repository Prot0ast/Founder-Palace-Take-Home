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

export {getAllCharacters};