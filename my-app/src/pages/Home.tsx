import React, { useContext, useEffect, useState } from 'react';
import { getRandomNumber } from '../services/characterService.ts';
import { useTheme } from '../ThemeContext.tsx';
import { Header } from '../components/Header.component.tsx';

export function Home() {
    const {theme, setTheme} = useTheme();

    const randomNumber = getRandomNumber(0, 825);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme;
        }
    }, []);

    useEffect(() => {
        document.body.className = theme; 
        localStorage.setItem('theme', theme); 
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>
            <div className={`home-container ${theme}`}>
                <Header />
                <h2 className="container">Character Viewer</h2>
                <h5 className="container">by Alan Barragan</h5>
                <button className="centerImg" onClick={toggleTheme}> Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme</button>
                <br />
                <a className="btn btn-primary btn-lg container" href="/character">View All Characters!</a>
                <br />
                <a className="btn btn-primary btn-lg container" href={`/character/${randomNumber}`}>Random Character!</a>
            </div>
        </>
    );
}