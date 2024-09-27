import React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/characterService.ts';

export function CharacterDetails(){
    const [character, setCharacter] = React.useState({
        id:'',
        name:'',
        species:'',
        status:'',
        gender:'',
        created:''
    });
    const {characterId } = useParams();

    React.useEffect(() =>{
        if(!characterId){
            return;
        }
        getCharacterById(characterId).then(response => {
            setCharacter(response.data)
        });
    }, [setCharacter, characterId]);

    return (
        <div>
            <h2>Character Details</h2>
            <dl>
                <dt>ID</dt>
                <dd>{character.id}</dd>
                <dt>Name</dt>
                <dd>{character.name}</dd>
                <dt>Species</dt>
                <dd>{character.species}</dd>
                <dt>Status</dt>
                <dd>{character.status}</dd>
                <dt>Gender</dt>
                <dd>{character.gender}</dd>
                <dt>Date Created</dt>
                <dd>{character.created}</dd>
            </dl>
        </div>
    )
}