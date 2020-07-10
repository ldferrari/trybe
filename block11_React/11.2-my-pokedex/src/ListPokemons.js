import React from 'react';
import ObjetoPokemon from './ObjectPokemon';

class ListPokemons extends React.Component {
    render () {
        const { pokemons } = this.props;
        return (
            <div className = 'listPok'>
                {pokemons.map((pokemon, index) => <ObjetoPokemon key={index} pokemon={pokemon} />)}
            </div>
        ) 
    }
}

export default ListPokemons