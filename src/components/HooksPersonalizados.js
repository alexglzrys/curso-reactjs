import React from 'react';
import { useFetch } from '../hooks/useFetch';

const HooksPersonalizados = () => {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon';
    // Nuestro hook personalizado emite un objeto como respuesta con 3 llaves
    const {data, isPending, error} = useFetch(API_URL);
    return (
        <div>
            <h4>Hooks Personalizados</h4>
            <pre>Pendiente: {JSON.stringify(isPending)}</pre>
            <pre>Error: {JSON.stringify(error)}</pre>
            <pre style={{whiteSpace: 'pre-wrap'}}>{JSON.stringify(data)}</pre>
        </div>
    )
}

export default HooksPersonalizados;