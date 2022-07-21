import { useEffect, useState } from 'react';

/**
 * Los hooks personalizados debe comenzar su nombre con useNombreArchivo
 * 
 * Los hooks personalizados nos permiten envolver lógica que se repire en muchas partes de nuestros componentes
 * como tal es el caso de llamadas a API.
 * Podemos tener un hook personalizado para cada tipo de verbo HTTP
 * Deben ser lo más genérico posible. Ya que si hay un tratamiento adicional con la respuesta, esta se debe hacer directamente en el componente que le corresponde
 */

export const useFetch = (url) => {
    // El resultado
    const [data, setData] = useState(null);
    // El loader
    const [isPending, setIsPending] = useState(true);
    // El error
    const [error, setError] = useState(null);

    // las acciones de efecto se deben ejecutar siempre y cuando cambie la url
    useEffect(() => {
        // Función para recuperar la data
        const fetchData = async() => {
            try {
                let response = await fetch(url);
                if (!response.ok) {
                    const message = {err: true, status: response.status, statusText: response.statusText || 'Ocurrió un error'}
                    throw message;
                }

                let data = await response.json();
                // Actualizar el estado (En este punto todo es exitoso)
                setIsPending(false);
                setData(data);
                setError({err: false});
            } catch (err) {
                setIsPending(false);
                setError(err);
            }
        }
        fetchData();
    }, [url])

    // Los hooks siempre tienen que devolver un resultado
    return {data, isPending, error}
}