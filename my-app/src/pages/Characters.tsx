import React from 'react';
import { Character } from '../types';
import { useState, useEffect} from "react";
import { CharacterTableRow } from '../components/CharacterTableRow.tsx';
import { Header } from '../components/Header.component.tsx';
import { getAllCharacters } from '../services/characterService.ts';

export function Characters(){
    const [characters, setCharacters ] = useState(new Array<Character>());

    useEffect(() => {
        getAllCharacters()
        .then(response =>{setCharacters(response.data)})
    }, [setCharacters]);
    
    console.log(characters ? characters : "Fetching data...");

    
    return (
        <>
        <Header />
        <div className="container">
            <h2>Rick and Morty Characters</h2>
            <table className='table table-responsive table-striped table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Species</th>
                        <th>Status</th>
                        <th>Gender</th>
                        <th>Date Created</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                 {characters.map((character) => (<CharacterTableRow key={character.id} character={character} />))}
                </tbody>
            </table>
        </div>
        </>
    )
}