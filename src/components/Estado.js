import React, { Component } from 'react';

// Un componente Dummy que se usa internamente en el componente de clase para proyectar el valor del estado actual
const Display = (props) => {
    return <h4>{props.contador}</h4>
}

class Estado extends Component {
    constructor(props) {
        super(props);

        // Declarar el estado de un componente basado en Clase
        this.state = {
            contador: 0
        }
    }

    incrementarContador() {
        // Actualizar el estado interno (o parte del mismo) de un componte
        this.setState((state, props) => ({
            contador: state.contador + 1
        }))
    }

    // Método del ciclo de vida del componente que se ejecuta una vez que el mismo se haya montado en pantalla
    componentDidMount() {
        // Modificar el estado interno del componente cada segundo
        this.interval = setInterval(() => {
            this.incrementarContador()
        }, 1000);
    }

    componentWillUnmount() {
        // Importante destruir los intervalos antes de eliminar el componente, de lo contrario el intervalo queda activo provocando fuga de memoria.
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <h4>El Estado en React</h4>
                <p>El estado consiste en los valores o lógica interna de un componente, mismos que provocan que el componente se vuelva a renderizar o pintar en pantalla si estos llegaran a cambiar de valor.</p>
                {/* Acceder al valor del estado actual del componente */}
                <p>{this.state.contador}</p>
                {/* Pasar el estado del componente, a un componente hijo mediante el uso de las props */}
                <Display contador={this.state.contador} />
            </div>
        )
    }
}

export default Estado;