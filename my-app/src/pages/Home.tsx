import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';

export function Home() {
    const [count, setCount] = React.useState(0);

    const theme = useContext(ThemeContext);

    React.useEffect(() => {
        // Side effect logic
        console.log("Component mounted");
        return () => {
            // Cleanup logic
            console.log("Component will unmount");
        };
        }, [
            //dependencies 
    ]);

    return (
        <>
            <div>
                <h2>Rick and Morty Cast</h2>
                <p>Filler text!</p>
                <a className="btn btn-primary btn-lg" href="/characters">View All Characters!</a>
            </div>
        </>
    );
}