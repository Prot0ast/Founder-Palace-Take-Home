/* eslint-disable no-unused-expressions */
import React from "react";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getCharacterByName } from "../services/characterService.ts";
import { Footer } from "../components/Footer.component.tsx";
import '../components/Page.css';

export function CharacterDetails() {
    const [character, setCharacter] = useState({
        name:"",
        species:"",
        status:"",
        gender:"",
        created:""
    });

    const {characterName } = useParams();

    useEffect(() => {
        if(!characterName) {
            return;
        }
        getCharacterByName(characterName).then((response) => {
            setCharacter(response.data);
        });
    },[setCharacter, characterName]);
    
    return (
        <>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        </head>
        <div>
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
                </table>
            <Footer />
        </div>
        </>
    );
}