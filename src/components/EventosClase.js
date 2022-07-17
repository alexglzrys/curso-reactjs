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

// Un componente, que recibe por props un manejador de eventos, mismo que es asociado al evento click
// Los eventos en React, solo existen en los elementos JSX
const MiBoton = (props) => <button onClick={props.myOnClick}>Soy un componente de React</button>

class EventosPersonalizados extends Component {
    state = {
        message: ''
    }

    // En React, los manejadores de eventos generalmente contienen el prefijo handleAction | handleNameMethod
    handleClick = (event) => {

        // ? React encapsula el evento como un Evento base sintético (SyntheticBaseEvent). Esto con la finalidad de dar soporte a cualquier tipo de navegador soportado por la versión de React.

        // Evento Sintético
        console.log(event);
        // El acceso a las propiedades del evento.
        console.log(event.target)

        // ! Si se desea acceder al evento nativo de JS

        // Evento nativo
        console.log(event.nativeEvent)
        // El acceso a las propiedades del evento nativo
        console.log(event.nativeEvent.target)


        this.setState((state, props) => ({
            message: 'El estado a cambiado'
        }))
    }

    // Manejador de evento que es ejecutado a través de un evento personalizado
    handleMyClick = (event) => {
        this.setState((state, props) => ({
            message: 'Mensaje desde evento personalizado'
        }))
    }

    // Manejador de evento que recibe información adicional
    handleCustomClick = (event, data) => {
        this.setState((state, props) => ({
            message: data
        }))
    }

    render() {
        return (
            <div>
                <h4>Eventos Personalizados</h4>
                {/* Los eventos en React solo existen en los elementos JSX */}
                <button onClick={this.handleClick}>Soy un elemento JSX de React</button>
                &nbsp;
                {/* 
                    Para reaccionar a un evento desde un componente en React, es necesario pasarle el controlador del evento mediante el uso de una prop
                    - Los eventos en React solo existen en los elementos, no en la firma del componente
                */}
                <MiBoton myOnClick={this.handleMyClick} />
                &nbsp;
                {/* 
                    Los manejadores de evento, pueden recibir información adicional necesaria para realizar cierta tarea en específico.
                    - Para ello se hace uso de un arrow functión que recibe el evento disparado, internamente se invoca al metodo manejador del evento, pasandole como parámetros, el evento seguido de la data adicional
                */}
                <button onClick={(e) => this.handleCustomClick(e, 'Información pasada como parametro al manejador de eventos')}>Pasar información adicional al manejador del evento</button>
                {this.state.message && <p>{this.state.message}</p>}
            </div>
        )
    }
}

export {
    EventosClaseES6,
    EventosClaseES7,
    EventosPersonalizados
}