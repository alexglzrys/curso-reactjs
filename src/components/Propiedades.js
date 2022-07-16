import React from 'react';
import PropTypes from 'prop-types';

// El objeto props pasa al componente como un argumento de la función
// En componentes de tipo clase, las props pasan como parámetro del constructor 
const Propiedades = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p><strong>Las Props en React</strong> son propiedades que son pasadas a un componente hijo desde su componente padre. Esto permite que los componnetes tengan la capacidad de mostrar información dinámica</p>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.product} - ${props.objeto.price}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

// Un componente puede declarar propiedades por defecto.
Propiedades.defaultProps = {
    title: 'Componente Funcional con Propiedades'
}

// El paquete prop-types permite especificar el tipo de dato que recibe cada una de las props del componente. El error de validación solo se lanza como mensaje en consola en tiempo de desarrollo. Es decir, la ejecución de la aplicación no se ve afectada por error. Es responsabilidad del desarrollador atender y pasar correctamente el tipo de dato en la propiedad correspondiente

Propiedades.propTypes = {
    cadena: PropTypes.string.isRequired,
    numero: PropTypes.number
}


export default Propiedades;