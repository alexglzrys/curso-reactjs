import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TarjetaClass from './components/TarjetaClass';
import TarjetaFunction from './components/TarjetaFunction';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoListas from './components/RenderizadoListas';
import { EventosClaseES6, EventosClaseES7, EventosPersonalizados } from './components/EventosClase';
import ComunicacionComponentes from './components/ComunicacionComponentes'
import CicloDeVida from './components/CicloDeVida';
import LlamadasApiRest from './components/LlamadasApiRest';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';

/**
 * Nota: Desde React 17, create-react-app importa de forma automática la librería de React en cada uno
 * de nuestros componentes, por lo que no es necesario declarar la importación de forma explicita.
 * Esto puede ser considerado como una mala práctica, por tanto, se recomienda importarla de forma manual
 * al inicio de nuestros archivos.
 */

function App() {
  // Declaración de variables a nivel de componente
  let mensaje = 'Hey Alejandro!, bienvenido al mundo de React';
  let herramientas = ['React JS', 'Angular', 'Vue', 'Svelte'];
  let isAuth = true;
  const [visibleScrollComponent, setVisibleScrollComponent] = useState(true);

  const handleVisible = () => setVisibleScrollComponent(false); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Interpolación de variables */}
        <h3>{mensaje}</h3>
        {/* Renderizar contenido con base a una condicional - El operador ternario es el equivalente a la estructura IF-ELSE en JSX */}
        <p>{isAuth ? 'Te encuentras logeado' : 'Estas en modo visitante'}</p>
        {/* Renderizar el contenido de un arreglo - El método map de los arreglos es el equivalente a la estructura FOR en JSX */}
        <ul>
          {herramientas.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </header>
      <section>
        <TarjetaClass title="Componente de Clase" message="Hola este es componente basado en clases" />
        <hr />
        <TarjetaFunction title="Componente Funcional" message="Hola este es un componente basado en una función" />
        <hr />
        {/* Las propiedades pasadas a un componente pueden ser de diferente tipo */}
        <Propiedades 
          cadena="Propiedad de tipo cadena"
          numero={37} 
          booleano={true} 
          arreglo={[1,2,3]} 
          objeto={{product: 'Manzana', price: 12.50}} 
          funcion={(num) => num * 2}
          elementoReact={<i>Texto con estilo de fuente itálica</i>}
          componenteReact={<TarjetaFunction title="Componente" message="Componente pasado como valor de una prop" />} />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoListas />
        <hr />
        <EventosClaseES6 />
        <hr />
        <EventosClaseES7 />
        <hr />
        <EventosPersonalizados />
        <hr />
        <ComunicacionComponentes />
        <hr />
        <CicloDeVida />
        <hr />
        <LlamadasApiRest />
        <hr />
        <ContadorHooks title="Eventos en Componente Funcional - useState" />
        {visibleScrollComponent && (
          <>
            <hr />
            <ScrollHooks handleVisible={handleVisible} />
          </>)}
        <hr />
        <RelojHooks />
        <hr />
        <AjaxHooks /> 
      </section>
    </div>
  );
}

export default App;
