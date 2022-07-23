import React, { useState } from "react";

const Formulario = () => {
  // Declarar el estado inicial de mi formulario
  const [data, setData] = useState({});

  // manejador de cambios en valor de entradas de controles de formulario
  const handleChangeValue = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // manejador de cambios en check - controles checkbox
  const handleChangeChecked = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div>
      <h4>Formularios en Componentes Funcionales</h4>
      <p>
        Los controles de formulario controlados con los que están asociados con
        el estado, los no controlados están vinculados con referencias de React
      </p>
      <form>
        <div>
          <label htmlFor="name">Nombre</label>
          {/* value contiene el valor actual en el estado
                    onChange llama al manejador para cambiar el estado asociado a este control de formulario */}
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChangeValue}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <p>Elije un sabor JS</p>
          {/* En controles de radio, el valor permanece intacto, solo se verifica si debe estar checkeado con base al valor asociado guardado en estado */}
          <input
            type="radio"
            name="framework"
            value="Vanilla JS"
            id="vanilla"
            checked={data.framework === "Vanilla JS"}
            onChange={handleChangeValue}
          />
          <label htmlFor="vanilla">Vanilla JS</label>
          <br />
          <input
            type="radio"
            name="framework"
            value="React JS"
            id="react"
            checked={data.framework === "React JS"}
            onChange={handleChangeValue}
          />
          <label htmlFor="react">React JS</label>
          <br />
          <input
            type="radio"
            name="framework"
            value="Angular"
            id="angular"
            checked={data.framework === "Angular"}
            onChange={handleChangeValue}
          />
          <label htmlFor="angular">Angular</label>
          <br />
          <input
            type="radio"
            name="framework"
            value="Vue JS"
            id="vue"
            checked={data.framework === "Vue JS"}
            onChange={handleChangeValue}
          />
          <label htmlFor="vue">Vue JS</label>
          <br />
          <input
            type="radio"
            name="framework"
            value="Svelte"
            id="svelte"
            checked={data.framework === "Svelte"}
            onChange={handleChangeValue}
          />
          <label htmlFor="svelte">Svelte</label>
        </div>
        <div>
          <label htmlFor="languaje">Selecciona tu lenguaje favorito</label>
          <br />
          {/* defaultValue contiene el valor por defecto que debería estar seleccionado al inicio - no se permite usar el atributo selected de HTML */}
          <select
            name="language"
            id="languaje"
            onChange={handleChangeValue}
            value={data.language}
            defaultValue=""
          >
            <option value="" disabled>
              Seleccione una opción
            </option>
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
            <option value="java">Java</option>
            <option value="c">C++</option>
          </select>
        </div>
        <div>
          {/* Este tipo de control no tiene un valor como tal, solo falso o verdadero.
                    Para ello asociamos el estado de este control en su prop checked. Y para obtener valores de tipo booleano cuando se presiona o no se usa el onChange pero se debe inspeccionar el atributo checked en lugar del value */}
          <input
            type="checkbox"
            name="terminos"
            id="terminos"
            checked={data.terminos}
            onChange={handleChangeChecked}
          />
          <label htmlFor="terminos">Acepto términos y condiciones</label>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
