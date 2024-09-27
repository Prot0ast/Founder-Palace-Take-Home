import React from 'react';
import { Character } from '../types';
import { CharacterTableRow } from '../components/CharacterTableRow';
import { getAllCharacters } from '../services/characterService';

export function Characters(){
    const [characters, setCharacters ] = React.useState(new Array<Character>());
    let newCharacter = 
    { 
        id: "",
        name: "",
        species: "",
        status: "",
        gender: "",
        created: ""
    }

    React.useEffect(() => {
        getAllCharacters().then(response =>{
            setCharacters(response.data)
        });
    }, [setCharacters]);

    return (
        <>
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
                    {characters.map((character) =>(<CharacterTableRow key={character.id} character={character} />))}
                </tbody>
            </table>
        </div>
        </>
    )
}