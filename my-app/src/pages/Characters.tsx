import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import { CharacterTableRow } from '../components/CharacterTableRow.tsx';
import { Header } from '../components/Header.component.tsx';
import { getAllCharacters } from '../services/characterService.ts';

export function Characters() {
    const [characters, setCharacters] = useState(new Array<Character>());

    useEffect(() => {
        getAllCharacters()
        .then(response => {
            if (Array.isArray(response.data)) {
                setCharacters(response.data);
            } else {
                console.error("Expected an array, but got:", response.data);
                setCharacters([]);
            }
        })
        .catch(error => {
            console.error("Error fetching characters:", error);
            setCharacters([]);
        });
    }, []);
    
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
                        {characters.map(character => (
                            <CharacterTableRow key={character.id} character={character} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
