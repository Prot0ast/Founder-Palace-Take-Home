import React from "react";
import { ThemeContext } from "./ThemeContext.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { Cast } from "./pages/Cast.tsx"
import { CharacterDetails } from "./pages/CastDetails.tsx";

function App(){
    return(
        <ThemeContext.Provider value="dark">
            <BrowserRouter>
                <Routes>
                    <Route path="/Cast" element={<Cast />} />
                    <Route path="/Cast/:characterName" element={<CharacterDetails />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default App;