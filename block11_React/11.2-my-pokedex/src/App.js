import React from 'react';
import './App.css';
import Pokemons from './data';
import ListPokemons from './ListPokemons'

function App() {
  return (
    <div className="App">
        <ListPokemons pokemons = {Pokemons}/>
    </div>
  );
}

export default App;
