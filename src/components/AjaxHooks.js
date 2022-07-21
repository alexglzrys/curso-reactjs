import React, { useEffect, useState } from 'react';

const Pokemon = ({avatar, name}) => {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

const AjaxHooks = () => {
    // Declarar variable de estado para almacenar el listado de pokemons
    const [pokemons, setPokemons] = useState([])

    // Efecto ComponentDidMount - para recuperar los pokemones del API Rest
    useEffect(() => {
        const API_URL = 'https://pokeapi.co/api/v2/pokemon';
        // Los efectos por naturaleza son sincronos, si deseamos hacer tareas asincronas, es necesario crear una función interna "async" e invocarla posteriormente.
        const fetchData = async() => {
            let response = await fetch(API_URL);
            let data = await response.json();
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
            // Actualizar el estado - setear los pokemones recuperados
            setPokemons(myPokemons)
        }
        fetchData();
    }, [])

    return (
        <div>
            <h4>Peticiones Ajax Hooks</h4>
            {pokemons.length ? pokemons.map(pokemon => <Pokemon key={pokemon.id} avatar={pokemon.avatar} name={pokemon.name} />) : <p>Cargando...</p>}
        </div>
    )
}

export default AjaxHooks;