import React, { Component } from 'react';

// Componentes funcionales que deben renderizarse con base a una condición
const Login = () => <p>Usted se encuentra logeado</p>
const Logout = () => <p>Incie sesión</p>

class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props)

        this.state = {
            session: true
        }
    }

    render() {
        return (
            <div>
                <h4>Renderizado Condicional</h4>
                {/* Renderizar un componente con base a una condición */}
                {this.state.session ? <Login /> : <Logout />}
                <p>Favor de abrir las React Dev Tools para cambiar el estado del componente</p>
            </div>
        )
    }
}

export default RenderizadoCondicional;