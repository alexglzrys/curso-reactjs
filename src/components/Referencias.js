import React, { useRef } from 'react';

const Referencias = () => {

    /**
     * Las referencias de React nos permiten hacer relación a elementos que se encuentran cargados en el DOM
     * Se usan para evitar acceder a ellos mediante el clásico JS de toda la vida... querySelectors o getElementsByid
     * React nos recomienda no hacer manipulaciones directamente en el DOM, para eso nos da las refernecias
     * Es importante no abusar de ellas.
     * 
     * Por ejemplo, para alternar la vista de un menu hamburgesa, sería un error controlar su visibilidad
     * con una variable de estado, ya que al moento de alternar, se estaría destruyendo o creando tantas veces en la UI.
     * Lo mejor sería controlarlo con CSS
     * 
     * Son un objeto con una propiedad current, el cual contiene como valor el elemento del DOM referenciado
     */

    const refMenuButton = useRef();
    const refMenu = useRef();
    // Para componentes de clase en lugar de useRef es createRef

    // controlar visibilidad del menu
    const handleToogleMenu = (e) => {
        if (refMenu.current.style.display === 'none') {
            refMenuButton.current.textContent = 'Cerrar';
            refMenu.current.style.display = 'block';
        } else {
            refMenuButton.current.textContent = 'Menu';
            refMenu.current.style.display = 'none';
        }
    }

    return (
        <div>
            <h4>Referencias</h4>
            <button ref={refMenuButton} onClick={handleToogleMenu}>Menú</button>
            <nav ref={refMenu}>
                <a href='/'>Sección 1</a>
                <br />
                <a href='/public'>Sección 2</a>
                <br />
                <a href='/'>Sección 3</a>
                <br />
                <a href='/'>Sección 4</a>
                <br />
                <a href='/'>Sección 5</a>
            </nav>
        </div>
    );
}

export default Referencias