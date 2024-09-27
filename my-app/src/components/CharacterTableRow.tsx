import React from 'react'
import { Character } from '../types'

interface CharacterTableRowProps {
    character: Character;
}

export function CharacterTableRow({character}: CharacterTableRowProps): JSX.Element {
    let characterLink = `/character/${character.id}`;
    return (
        <tr>
            <td>{character.id}</td>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.status}</td>
            <td>{character.gender}</td>
            <td>{character.created}</td>
            <td>
                <a className="btn btn-info" href={characterLink}>Details
                </a>
            </td>
        </tr>
    );
}