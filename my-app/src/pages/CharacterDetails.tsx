import React from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/characterService.ts';
import { getRandomNumber } from '../services/characterService.ts';
import { useTheme } from '../ThemeContext.tsx';

export function CharacterDetails(){
    const [character, setCharacter] = React.useState({
        id:0,
        name:'',
        species:'',
        status:'',
        gender:'',
        created:'',
        image:'',
        url:''
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

    const randomNumber = getRandomNumber(0, 825);

    const { theme, setTheme } = useTheme();

    return (
        <div className={`home-container ${theme}`}>
            <h2 className="container">You got {character.name}!</h2>
            <dl>
                <img className="centerImg" src={character.image} alt={character.name} style={{ width: 150, height: 150 }} />
                <br></br>
                <div className="flexbox container">
                <dt>Name:</dt>
                <dd>{character.name}</dd>
                </div>
                
                <div className="flexbox container">
                <dt>Species:</dt>
                <dd>{character.species}</dd>
                </div>

                <div className="flexbox container">
                <dt>Status:</dt>
                <dd>{character.status}</dd>
                </div>

                <div className="flexbox container">
                <dt>Gender:</dt>
                <dd>{character.gender}</dd>
                </div>

                <div className="flexbox container">
                <dt>Date Created:</dt>
                <dd>{character.created}</dd>
                </div>

                <div className="flexbox container">
                <dt>URL:</dt>
                <dd>{character.url}</dd>
                </div>
            </dl>
            <div>
                <a className="btn btn-lg flexbox" href={`/`}>Back</a>
                <a className="btn btn-lg flexbox" href={`/character/${randomNumber}`}>Again!</a>
            </div>
            

        </div>
    )
}