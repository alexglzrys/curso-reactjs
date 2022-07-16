import React from 'react';
import logo from './logo.svg';
import './App.css';
import TarjetaClass from './components/TarjetaClass';
import TarjetaFunction from './components/TarjetaFunction';

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
      </section>
    </div>
  );
}

export default App;
