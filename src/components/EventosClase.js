import React, { Component } from 'react';

class EventosClase extends Component {
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
                <h4>Eventos en Componentes basados en Clases</h4>
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

export default EventosClase;