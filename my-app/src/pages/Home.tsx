import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext.tsx';

export function Home() {
    const [count, setCount] = React.useState(0);

    const theme = useContext(ThemeContext);

    React.useEffect(() => {
        console.log("Component mounted");
        return () => {
            console.log("Component will unmount");
        };
        }, []);

    return (
        <>
            <div>
                <img className="centerImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5_eCMFv2JFx_GLpkK4ZcVKcXqdTnkKdgWA&s" alt="Rick and Morty Logo"/>
                <h2 className="container">Rick and Morty Cast</h2>
                <a className="btn btn-primary btn-lg container" href="/character">View All Characters!</a>
            </div>
        </>
    );
}