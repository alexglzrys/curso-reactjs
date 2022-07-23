import React from "react";
import '../styles/Estilos.css';
import HelperModule from '../styles/Helper.module.css';
import '../styles/Estilos.scss';

/**
 * Existen muchas metodologías de trabajo para organizar la estrutura de nuestros componentes y sus estilos
 * 
 * Componente.js
 * Componente.css
 * 
 * Carpeta Componente
 *      index.js
 *      index.css
 * 
 * Carpeta Componentes
 *      Formulario.js
 * 
 * Carpeta Estilos
 *      Formulario.css
 * 
 * Por otra parte, tenemos muchas formas para aplicar estilos CSS a nuestros componetnes
 * 1. Importar un archivo de CSS a nuestro componente
 * 2. Colocar reglas de estilo CSS en linea 
 * 3. Declarar reglas de estilo en objetos de JS, y posteriormente enlazarlas en el atributo style del elemento (en linea)
 * 4. Importar un archivo de CSS como modulo en nuestro componente
 * 5. Usar SASS, instalando previamente node-sass
 */

const myStyles = {
    backgroundColor: 'crimson',
    color: '#fff',
    fontSize: '1.2rem',
    padding: '1rem',
    borderRadius: '10px',
    maxWidth: '50%',
    margin: 'auto'
}

const Estilos = () => {
    return (
        <div className="estilos">
            <h4>Estilos CSS en React</h4>
            <p className="estilos__title">Estilos en archivo CSS externo</p>
            <p style={{backgroundColor: 'gold', padding: '1rem'}}>Estilos CSS en linea (propiedad style)</p>
            <p style={myStyles}>Estilos CSS en linea (objeto)</p>
            <p>Importar normalize en nuestro archivo CSS principal <br /><code>@import-normalize</code><br />solo está disponible en create-react-app</p>
            <div className={HelperModule.success}>
                Estilos CSS con Módulos
            </div>
            <div className={HelperModule.error}>
                Estilos CSS con Módulos
            </div>
            <p className="estilos-sass">Estilos CSS mediante SASS</p>
        </div>
    )
}

export default Estilos;