import React, { useEffect, useState } from 'react';

const Display = ({hour}) => {
    return (
        <p>{hour}</p>
    )
}

const RelojHooks = (props) => {
    // Definición de variables de estado
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    // ComponentDidUpdate - estar atento al cambio de valor de la variable de estado visible
    useEffect(() => {
        let temporizador
        if (visible) {
            // Ejecutar el intervalo
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            // Limpiar intervalo
            clearInterval(temporizador)
        }
    }, [visible])

    return (
        <div>
            <h4>Componente Funcional Reloj</h4>
            {visible && <Display hour={hour} />}
            {/* Al actualizar la variable de estado visible, se ejecutará nuestro efecto asociado */}
            <button onClick={() => { setVisible(true)}}>Inciar</button>
            &nbsp;
            <button onClick={() => { setVisible(false)}}>Detener</button>
        </div>
    );
}

export default RelojHooks;