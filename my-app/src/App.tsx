import React from "react";
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./ThemeContext";

function App(){
    return(
        <ThemeContext.Provider value="dark">

        </ThemeContext.Provider>
    );
}

export default App;