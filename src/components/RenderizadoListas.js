import React, { Component } from 'react';

// Importar datos almacenados en un archivo JSON
import data from '../helpers/data.json';

// Componente que muestra información sobre un framework o librería en particular
const Framework = (props) => {
    return (
        <article>
            <h4>{props.data.name}</h4>
            <p>{props.data.description}</p>
            <a href={props.data.url} target="_blank" rel="noreferrer">Visitar</a>
        </article>
    )
}

class RenderizadoListas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            personas: ['Alejandro', 'Fabiola', 'Mariela', 'Fernando']
        }
    }

    render() {
        return (
            <div>
                <h4>Renderizado de Listas de elementos</h4>
                <ul>
                    {/* 
                    Mostrar cada uno de los elementos situados en una lista. 
                    Es importante especificar un valor único en el prop key del elemento, para que React pueda saber que elemento se actualizó o eliminó en algun momento del ciclo de vida del componente 
                    */}
                    {this.state.personas.map((persona, index) => <li key={index}>{persona}</li>)}
                </ul>
                <h4>Renderizado de Listas de Componentes</h4>
                <section>
                    {data.frameworks.map(element => <Framework key={element.id} data={element} />)}
                </section>
            </div>
        )
    }
}

export default RenderizadoListas;