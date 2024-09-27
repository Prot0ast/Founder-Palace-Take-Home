import React from 'react';
import { Home } from './pages/Home.tsx';
import { ThemeContext } from './ThemeContext.tsx';
import { Characters } from './pages/Characters.tsx';
import { CharacterDetails } from './pages/CharacterDetails.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <ThemeContext.Provider value="dark">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:characterId" element={<CharacterDetails />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      );
}

export default App;