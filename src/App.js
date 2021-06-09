import React from "react"
import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import { portal } from './assets/index';
import Textbox from './components/Textbox/Textbox.js';
import CharacterGrid from './containers/CharacterGrid/CharacterGrid';

function App() {
  return (
    <div className="App">
      <header>
        <HeroBanner />
      </header>
      <div className="portal-container">
        <img src={portal} className="App-logo" alt="logo" />
      </div>
      <Textbox>
        Ohhh uh oh geeze -- h-h-here's a character map of all the characters on the show. You can select filters to whichever you like
        or search for your favorite character. A-a-at the top is a random character. Click through to see a full profile.
        </Textbox>
      <CharacterGrid />
  
    </div>
  );
}

export default App;