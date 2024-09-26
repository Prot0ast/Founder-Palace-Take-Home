import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../src/ThemeContext.tsx";
import { Footer } from "../components/Footer.component.tsx";
import { getAllCharacters } from "../services/characterService.ts";

export function Cast(){
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