import React, { useState } from 'react';

const ContadorHooks = (props) => {
    // Definir el estado del componente funcional - Hook useState
    // Por cada variable de estado, es importante definir una nueva linea con useState (es más facil de esta forma que encapsular todo en un objeto o arreglo)

    /**
     * nombre de la variable de estado: contador
     * función para modificar la variable de estado contador: setContador
     * valor inicial de la variable de estado contador: 0
     * */ 

    const [contador, setContador] = useState(0);

    // Definiciòn de manejadores de estado
    const handleIncrementar = () => setContador(contador + 1);
    const handleDecrementar = () => setContador(contador - 1);

    // Los componentes funcionales usan el return para renderizar los datos en la vista
    return (
        <div>
            <h4>{props.title}</h4>
            <button onClick={handleIncrementar}>Incrementar +</button>
            &nbsp;
            <button onClick={handleDecrementar}>Decrementar -</button>
            <p>Valor actual del contador: <mark><strong>{contador}</strong></mark></p>
        </div>
    )
}

// Declarar propiedades por defecto
ContadorHooks.defaultProps = {
    title: 'Componente Funcional basado en Hooks'
}

export default ContadorHooks;
