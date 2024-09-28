import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import { useTheme } from '../ThemeContext.tsx';
import { Header } from '../components/Header.component.tsx';
import { getAllCharacters } from '../services/characterService.ts';

interface CharacterApiResponse {
    info: {
        pages: number;
    };
    results: Character[];
}

export function Characters() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [filter, setFilter] = useState<string>('All'); // State for filter
    const [sortOption, setSortOption] = useState('name');
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const fetchAllCharacters = async () => {
            let allCharacters: Character[] = [];
            let page = 1;
            let totalPages = Infinity;

            while (page <= totalPages) {
                try {
                    const response: CharacterApiResponse = await getAllCharacters(page);
                    allCharacters = allCharacters.concat(response.results);
                    totalPages = response.info.pages;
                    page++;
                } catch (error) {
                    console.error("Error fetching characters:", error);
                    break;
                }
            }
            const uniqueCharacters = Array.from(new Map(allCharacters.map(character => [character.id, character])).values());
        setCharacters(uniqueCharacters);
        };

        fetchAllCharacters();
    }, []);

    const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
    };

    const filteredCharacters = filter === 'All' 
        ? characters 
        : characters.filter(character => character.status === filter);

    const sortedCharacters = [...filteredCharacters].sort((a, b) => {
        if (sortOption === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortOption === 'created') {
            return new Date(a.created).getTime() - new Date(b.created).getTime();
        }
        return 0;
    });

    return (
        <>
        <div className={`home-container ${theme}`}>
            <Header />
            <h3 className="container">All Characters</h3>
            <a className="btn button btn-lg container" href={`/`}>Back</a>

            
                <div className="select-container container">
                    <label htmlFor="statusFilter">Filter by Status: </label>
                    <select id="statusFilter" value={filter} onChange={handleFilterChange}>
                        <option value="All">All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>

                <div className="select-container container">
                    <label htmlFor="sortFilter">Sort by: </label>
                    <select id="sortFilter" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="created">Created Date</option>
                    </select>
                </div>

                {sortedCharacters.length > 0 ? (
                    <ul>
                        {sortedCharacters.map(character => (
                            <li key={character.id}>
                                <hr />
                                <img src={character.image} alt={character.name} style={{ width: 50, height: 50 }} />
                                <strong>Name:</strong> {character.name} <br />
                                <strong>Status:</strong> {character.status} <br />
                                <strong>Species:</strong> {character.species} <br />
                                <strong>Gender:</strong> {character.gender} <br />
                                <strong>Created:</strong> {character.created} <br />
                                <hr />
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
