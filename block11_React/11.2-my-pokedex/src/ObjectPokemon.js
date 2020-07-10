import React from 'react';

class ObjetoPokemon extends React.Component {
    render () {
        const {name, type, averageWeight, image} = this.props.pokemon;
        return(
            <div className = 'objePok'>
                <div>
                    <p><strong>{name}</strong></p>
                    <p>{type}</p>
                    <p>{averageWeight.value + ': ' + averageWeight.measurementUnit}</p>
                </div>
                <img className = 'classImg' src = {image} alt={name}/>
            </div>
        )
    }
}

export default ObjetoPokemon 