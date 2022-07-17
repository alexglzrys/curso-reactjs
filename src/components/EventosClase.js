import React, { Component } from 'react';

class EventosClaseES6 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            volume: 0
        }

        // ? Importante vincular el contexto de this (esta clase) 
        // ? a cada uno de los métodos que estarán asociados a eventos disparados por el componente

        this.subirVolumen = this.subirVolumen.bind(this);
        this.bajarVolumen = this.bajarVolumen.bind(this);
    }

    // Método para subir nivel de volumen
    subirVolumen() {
        // ! Por defecto, el contexto de this dentro de este método no está definido
        this.setState((state, props) => ({
            volume: state.volume + 1
        }))
    }

    // Método para bajar nivel de volumen
    bajarVolumen() {
        // ! Por defecto, el contexto de this dentro de este método no está definido
        this.setState((state, props) => ({
            volume: state.volume - 1
        }))
    }

    render() {
        return (
            <div>
                <h4>Eventos en Componentes basados en Clases - ES6</h4>
                <p>Favor de usar los siguientes botones para controlar el nivel de sonido</p>
                <nav>
                    {/* 
                        Asociar el evento click del botón, con algún metodo definido en el componente 
                        El nombre de los eventos en React son iguales que en JS nativo, pero en camel-case
                        Importante: no se deben invocar los métodos "haciendo uso de paréntesis", solo se deben mencionar
                    */}
                    <button onClick={this.subirVolumen}>+</button>
                    &nbsp;
                    <button onClick={this.bajarVolumen}>-</button>
                </nav>
                <h5>Nivel actual: {this.state.volume}</h5>
            </div>
        )
    }
}

// Property Initializers
class EventosClaseES7 extends Component {

    /**
     * 1. Desaparece el constructor
     * 2. El estado se define a nivel de componente sin necesidad de invocar a this
     *      -- state = {}
     * 3. Los métodos del componente se definen mediante Arrow Functions
     *      -- Esto permite que this dentro de cada función esté bajo el contexto de la propia clase
     *      -- Por tanto, no hay necesidad de bindear this a cada método que se encuentre asociado a un evento
     * 4. Los props, se encuentran bajo el contexto de this
     *      -- this.props.value
     * 5. defaultsProps y propTypes se declaran como objetos estáticos de la clase
     *      -- static defaultProps = {}
     *      -- static propTypes = {}
     * 
     * Más información
     * https://es.reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html
     */

    state = {
        volume: 0
    }

    // Método para subir nivel de volumen
    subirVolumen = (event) => {
        // ? En un método de tipo Arrow Function, el contexto de this es el de la propia clase

        this.setState((state, props) => ({
            volume: state.volume + 1
        }))
    }

    // Método para bajar nivel de volumen
    bajarVolumen = (event) => {
        // ? En un método de tipo Arrow Function, el contexto de this es el de la propia clase

        this.setState((state, props) => ({
            volume: state.volume - 1
        }))
    }

    render() {
        return (
            <div>
                <h4>Eventos en Componentes basados en Clases - ES7 (Property Initializers)</h4>
                <p>Favor de usar los siguientes botones para controlar el nivel de sonido</p>
                <nav>
                    {/* 
                        Asociar el evento click del botón, con algún metodo definido en el componente 
                        El nombre de los eventos en React son iguales que en JS nativo, pero en camel-case
                        Importante: no se deben invocar los métodos "haciendo uso de paréntesis", solo se deben mencionar
                    */}
                    <button onClick={this.subirVolumen}>+</button>
                    &nbsp;
                    <button onClick={this.bajarVolumen}>-</button>
                </nav>
                <h5>Nivel actual: {this.state.volume}</h5>
            </div>
        )
    }
}

export {
    EventosClaseES6,
    EventosClaseES7
}