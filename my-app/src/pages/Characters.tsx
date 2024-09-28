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
    const [filter, setFilter] = useState<string>('All'); // State for filter

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

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    const filteredCharacters = filter === 'All' 
    ? characters 
    : characters.filter(character => character.status === filter);

    return (
        <>
            <Header />
            <div className="container">
                <h2>Rick and Morty Characters</h2>

                <div className="select-container">
                <label htmlFor="statusFilter">Filter by Status:</label>
                <select id="statusFilter" value={filter} onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Alive">Alive</option>
                    <option value="Dead">Dead</option>
                    <option value="unknown">Unknown</option>
                </select>
                </div>
                {filteredCharacters.length > 0 ? (
                    <ul>
                        {filteredCharacters.map(character => (
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
