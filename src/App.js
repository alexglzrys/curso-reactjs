import logo from './logo.svg';
import './App.css';

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
    </div>
  );
}

export default App;
