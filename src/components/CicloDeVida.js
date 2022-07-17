import React, { Component } from 'react';

class Display extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }

    componentWillUnmount() {
        console.log(6, 'ComponentWillUnmount', 'El componente Display se ha destruido del DOM, es el momento ideal para hacer limpieza y desuscribirse de servicios - observables');
    }

    render() {
        return(
            <p>{this.props.hora}</p>
        )
    }
} 

/**
 * Ciclo de vida de los componentes de clase en React
 * 
 * Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:
 * 
 * Montaje.
 *      constructor()
 *      render()
 *      componentDidMount()
 * 
 * Actualización.
 *      render()
 *      componentDidUpdate()
 * 
 * Desmontaje
 *      componentWillUnmount()
 * 
 * 
 * En los componentes basados en funciones, desde React 16.8 existen los Hooks para dar ciclo de vida a este
 * tipo de componentes mediante useEffect
 */

export default class CicloDeVida extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        }

        this.interval = null;

        console.log(1, 'Constructor', 'El componente se ha inicializado, aun NO SE ENCUENTRA en el DOM');
    }

    componentDidMount() {
        console.log(3, 'ComponentDidMount', 'El componente ya se montado en el DOM, es el momento perfecto para hacer llamadas a servicios');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(5, 'ComponentDidUpdate', 'El estado o las props del componente han cambiado');
        // Tenemos acceso al valor anterior tanto de props como del estado.
        // Acciones con estos valores pueden involucrar el desarrollo de Logs, o llamadas a servicios para hacer comparaciones sobre valores anteriores y recientes 
        console.log(prevProps);
        console.log(prevState)
    }

    tictac = () => {
        this.interval = setInterval(() => {
            this.setState((state, props) => ({
                hora: new Date().toLocaleTimeString()
            }))
        }, 1000);
    }

    handleIniciar = (event) => {
        this.tictac();
        this.setState((state, props) => ({
            visible: true
        }))
    }

    handleDetener = (event) => {
        clearInterval(this.interval);
        this.setState((state, props) => ({
            visible: false
        }))
    }

    render() {
        console.log(2,4, 'Render', 'El componente se ha dibujado (o redibujado por algún cambio) en el DOM');
        return (
            <div>
                <h4>Ciclo de Vida de los Componentes de Clase</h4>
                <p>Abre la consola del inspector de elementos y observa el orden en que se invocan los métodos del ciclo de vida</p>
                {/* 
                    Mostrar el componente Display siempre y cuando el estado de visible sea verdadero 
                    En React un componente se destruye ya sea cambiando de página en un router o simplemente con el renderizado condicional
                */}
                {this.state.visible && <Display hora={this.state.hora} /> }
                <button onClick={this.handleIniciar}>Inciar</button>
                &nbsp;
                <button onClick={this.handleDetener}>Detener</button>
            </div>
        )
    }
}