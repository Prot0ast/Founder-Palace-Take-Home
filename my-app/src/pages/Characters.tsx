import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import { CharacterTableRow } from '../components/CharacterTableRow.tsx';
import { Header } from '../components/Header.component.tsx';
import { getAllCharacters } from '../services/characterService.ts';

interface CharacterApiResponse {
    info: any;
    results: Character[];
}

export function Characters() {
    const [characters, setCharacters] = useState<Character[]>([]);

    useEffect(() => {
        getAllCharacters()
            .then((response: CharacterApiResponse) => {
                setCharacters(response.results);
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
                {characters.length > 0 ? (
                    <ul>
                        {characters.map(character => (
                            <li key={character.id}>
                                <img src={character.image} alt={character.name} style={{ width: 50, height: 50 }} />
                                <strong>Name:</strong> {character.name} <br />
                                <strong>Status:</strong> {character.status} <br />
                                <strong>Species:</strong> {character.species} <br />
                                <strong>Gender:</strong> {character.gender} <br />
                                <strong>Created:</strong> {character.created} <br />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No characters found.</p>
                )}
            </div>
        </>
    );
}
