import React, { Component } from 'react';

class Padre extends Component {
    state = {
        contador: 0
    }

    handleIncrementarContrador = (event) => {
        this.setState((state, props) => ({
            contador: state.contador + 1
        }))
    }

    // ? En React la propagación del estado fluye de forma unidireccional y descendiente (de padre a hijo)
    // Si cambia el estado del componente, este automáticamente se vuelve a renderizar en pantalla
    // Si cambia el valor de las props en un compontente, este se vuelve a renderizar en pantalla

    render() {
        return (
            <div>
                <h4>Comunicación entre componentes</h4>
                <p>Estado actual del componente padre <strong><mark>{this.state.contador}</mark></strong></p>
                {/* 
                    - La comunicación de componentes padres a hijos en React se da por medio de las props
                    - La comunicación de componentes hijos a padres en React, es posible a través de los eventos personalizados
                    - La comunicación entre componentes no relacionados directamente en React, se puede dar con la ayuda de librerías que manejan el estado global de la aplicación (REDUX), o a través de la API nativa de React llamada Context (opción candidata para evitar pasar props de forma profunda a componentes nietos).
                            - Existen varios patrones de diseño para llevar a cabo la comunicación entre componentes no relacionados
                            
                            https://github.com/millermedeiros/js-signals/wiki/Comparison-between-different-Observer-Pattern-implementations

                    - Para compartir información con elementos que no forman parte del DOM Virtual de la aplicación React, se hace a través de los Portales
                */}
                <Hijo mensaje="Componente Hijo número 1" handleIncrementarContrador={this.handleIncrementarContrador} />
                <Hijo mensaje="Componente Hijo número 2" handleIncrementarContrador={this.handleIncrementarContrador} />
            </div>
        )
    }
}

const Hijo = (props) => {
    return (
        <>
            {/* Renderizar la información que el padre comparte con este componente hijo */}
            <p>{props.mensaje}</p>
            {/* Modificar el estado del componente padre a través del manejador de eventos handleIncrementarContador */}
            <button onClick={props.handleIncrementarContrador}>Incrementar contador desde hijo</button>
        </>
    )
}

export default Padre;