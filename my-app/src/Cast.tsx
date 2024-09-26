import React, { useEffect, useState } from "react";
import { Footer } from "./Footer.component.tsx";
import { getAllCharacters } from "./characterService.ts";
import { Character } from "../src/types.ts";
import './Page.css';

export function Cast(){
    const [characters, setCharacters] = useState({});

    const getJSON = async () => {
        const resp = await fetch("https://rickandmortyapi.com/api/character");
        var data = await resp.json();
        setCharacters(data);
    };

    useEffect(() => {
        getJSON();
    });

    var j = JSON.stringify(characters);
    var parsedCharacters = JSON.parse(j);
    
    fetch("https://rickandmortyapi.com/api/character").then(function(response){
        return response.json();
    }).then(function(characters){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let character of characters){
            out += `
            <tr>
                <td>${character.name}</td>
                <td>${character.species}</td>
                <td>${character.status}</td>
                <td>${character.gender}</td>
                <td>${character.created}</td>
            </tr>
            `;
        }
        placeholder!.innerHTML = out;
    })

    return (
        <>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <div className = "container">
            <h2 className="centerText">Rick and Morty Characters</h2>
            <table className = 'table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Status</th>
                        <th>Gender</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
            <tbody id="data-output">
            </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}