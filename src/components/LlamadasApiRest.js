import React, { Component } from 'react';

const DisplayPokemon = (props) => {
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class LlamadasApiRest extends Component {
    state = {
        pokemons: []
    }

    // Método del ciclo de vida dónde se recomienda encarecidamente hacer peticiones HTTP para obtener datos que consumirá el componente.
    async componentDidMount() {
        const API_URL = 'https://pokeapi.co/api/v2/pokemon';
        let response = await fetch(API_URL);
        let data = await response.json();

        // Usar async/await dentro del método map, obliga a que todo el conjunto de promesas devueltas en el nuevo arreglo se cumplan en paralelo. Para ello es importante envolver el resultado en Promise.all.
        // ! Array.map no espera hasta que cada elemento se resuelva, esto es hasta cierto punto normal ya que la consulta puede demorar demasiado por cada elemento, provocando un efecto bloqueante
        let myPokemons = await Promise.all(
            data.results.map(async (elPokemon) => {
                let response = await fetch(elPokemon.url);
                let myPokemon = await response.json()
                
                return {
                    "id": myPokemon.id,
                    "name": myPokemon.name,
                    "avatar": myPokemon.sprites.front_default 
                }
            })
        ) 
        
        // Actualizar el estado con la nueva data resultado de la llamada hacia la API
        this.setState((state, props) => ({
            pokemons: [...myPokemons]
        }))
    }

    render() {
        return (
            <div>
                <h4>Llamadas a API Rest</h4>
                {/* Solo renderizamos la data en la vista cuando existan resultados en la variable de estado */}
                {this.state.pokemons.length ? this.state.pokemons.map((pokemon, index) => <DisplayPokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar} />) : 'Cargando datos...'}
            </div>
        )
    }
}

