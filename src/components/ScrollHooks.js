import React, { useEffect, useState } from 'react';

const ScrollHooks = (props) => {
    const [scrollY, setScrollY] = useState(0);

    // Podemos tener tantos useEffect como se necesiten
    
    /**
     * Primer parámetro: La función que se ejecutará en la fase de Montaje/Actualización
     * Segundo parámetro: La variable de estado a supervisar en busca de cambios. Si hay cambio, se ejecuta nuevamente la función
     * 
     * Nota:
     * Si deseamos el efecto ComponentDidUpdate que se invoca cada vez que se renderiza el componente, no se especifica el segundo parámetro
     * Si deseamos el efecto ComponentDidUMount, se le pasa como segundo parámetro un arreglo vacio
     *      -- Este es el indicado para hacer peticiones a servicios HTTP
     * Si deseamos el efecto ComponentDidUpdate solo cuando el valor del estado de una variable cambia, 
     * se especifica como segundo parámetro un arreglo con el nombre de la variable a supevisar
     *      -- Se recomienda esta opción siempre en lugar de la primera (no colocar segundo parámetro)
     * Si deseamos el efecto ComponentWillUnmount, se retorna una función en el primer parámetro con las acciones a ejecutar
     *      -- Este es el indicado para cancelar suscripciones antes de eliminar el componente
     * 
     *      
     */
    

    // Fase de montaje
    useEffect(() => {
        console.log(1, 'componentDidMount', 'Fase de montaje')
    }, []);

    // Fase de actualizacion
    useEffect(() => {
        console.log(2, 'componentDidUpdate', 'Fase de actualización')
        window.addEventListener('scroll', detectarScroll);
    }, [scrollY]);

    // Fase de desmontaje
    useEffect(() => {
        return () => {
            console.log(3, 'componentWillUnmount', 'Fase de desmontaje')
        }
    }, []);

    const detectarScroll = () => setScrollY(window.pageYOffset)

    return (
        <div>
            <h4>Ciclo de Vida en Componente Funcional - Hook useEffect</h4>
            <p>ScrollY del navegador {scrollY}px</p>
            <button onClick={props.handleVisible}>Eliminar</button>
        </div>
    )
}

export default ScrollHooks;