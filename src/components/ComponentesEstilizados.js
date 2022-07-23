import React from "react";
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} from "styled-components";

/**
 * La librería de Styled Component nos ofrece una metodología de trabajo parecida a los Single File Components de Vue
 * donde en un mismo archivo tenemos
 *      Presentación
 *      Template
 *      Lógica de programación
 * 
 * Otra de sus virtudes es que los estilos los encapsula en un ambito por componente
 */
const mainColor = "#db7093",
  mainAlphaColor80 = "#db709380";

// Una función que retorna el valor de una regla de transición CSS con tiempo variable
const setTransitionTime = (time) => `all ${time} ease-in-out`;

// Animaciones CSS
const fadeIn = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

// Style-Component contiene un objeto para cada elemento HTML
const Title = styled.h3`
  margin: 0;
  text-align: center;
  padding: 1rem;
  // Al ser un string template, podemos interpolar variables o constantes de JS
  background-color: ${mainColor};
  transition: ${setTransitionTime(".5s")};
  // Podemos leer información de las props para variar el valor de algunos estilos, en caso de no venir podemos dejar uno por defecto
  color: ${({ color }) => color || "#fff"};
  animation: ${fadeIn} 1.5s ease-out;

  // Verificar si el elemento acepta cambios adicionales en su estilo (prop.isButton)
  ${({ isButton }) =>
    isButton &&
    css`
      cursor: pointer;
      border-radius: 5px;
      margin: 1rem auto;
      width: 300px;
    `}

  // Podemos anidar estilos como en SASS, estos tambien pueden afectar elementos internos de algun componente o padre HTML
        &:hover {
    background-color: ${mainAlphaColor80};
  }
`;

// Declaración de tema Light
const light = {
  color: "#222",
  bgColor: "#ddd",
};
// Declaración de tema Dark
const dark = {
  bgColor: "#222",
  color: "#ddd",
};

const Texto = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-bottom: 0.5rem;
  // Usar valores pasados como tema seleccionado - ThemeProvider
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.bgColor};
`;

// Heredar estilos de otros componentes
const TextoRedondeado = styled(Texto)`
  border-radius: 2rem;
`;

// Aplicar estilos globales (lo ideal es hacerlo en index o App.js)
const GlobalStyle = createGlobalStyle`
        h4 {
            color: #49b9ee;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-transform: uppercase;
        }
    `;

const ComponentesEstilizados = () => {
  return (
    // No es obligatorio este wrapper - solo cuando deseamos aplicar estilos globales a la aplicación
    <GlobalStyle>
      <h4>Styled Components</h4>
      <Title>Soy un H3 estilizado con styled-components</Title>
      {/* Podemos variar el valor de algunos estilos entre elementos del mismo tipo */}
      <Title color="#61dafb">Soy un H3 con variante de estilo</Title>
      {/* Podemos agregar más reglas de estilo a elementos del mismo tipo para modificar su visualización */}
      <Title isButton>Soy un H3 estilizado como botón</Title>
      {/* Styled-components cuentan con el componente ThemeProvider que permite asignar temas a nuestros elementos */}
      <ThemeProvider theme={light}>
        <Texto>
          Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus
          sagittis fermentum, mus cum diam laoreet convallis bibendum porttitor
          proin fusce nisl, sociosqu montes hendrerit cras mauris nisi vehicula
          nam euismod. Eu morbi consequat velit sollicitudin sem curae metus
          hendrerit neque, blandit pellentesque imperdiet platea praesent porta
          porttitor nascetur, rutrum faucibus aliquet et eleifend vulputate
          torquent gravida. Interdum volutpat mauris sociosqu convallis faucibus
          enim libero cubilia in, a pulvinar aptent penatibus vel ligula
          suscipit nostra augue sagittis, nullam fames dapibus inceptos tempor
          ad integer platea.
        </Texto>
        <TextoRedondeado>
          Hola quis, augue sociosqu eu maecenas hac molestie vivamus nec
          curabitur pellentesque. Himenaeos lacus varius accumsan volutpat
          habitasse dapibus sollicitudin eget fermentum, quis mus inceptos
          nullam commodo sem viverra dui eros, sed in pellentesque nisl odio
          conseq
        </TextoRedondeado>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Texto>
          Magnis auctor aliquet turpis senectus mollis vitae habitasse pretium
          volutpat malesuada praesent, eros cubilia posuere montes nunc in nibh
          ridiculus luctus quis, augue sociosqu eu maecenas hac molestie vivamus
          nec curabitur pellentesque. Himenaeos lacus varius accumsan volutpat
          habitasse dapibus sollicitudin eget fermentum, quis mus inceptos
          nullam commodo sem viverra dui eros, sed in pellentesque nisl odio
          consequat et mollis. Sollicitudin inceptos viverra parturient libero
          tempus primis nisi sociosqu nec fusce, montes mauris lacinia penatibus
          senectus id vitae urna diam, facilisi eget nulla per vestibulum cum
          sed fames quisque.
        </Texto>
        <TextoRedondeado>
          Hola quis, augue sociosqu eu maecenas hac molestie vivamus nec
          curabitur pellentesque. Himenaeos lacus varius accumsan volutpat
          habitasse dapibus sollicitudin eget fermentum, quis mus inceptos
          nullam commodo sem viverra dui eros, sed in pellentesque nisl odio
          conseq
        </TextoRedondeado>
      </ThemeProvider>
    </GlobalStyle>
  );
};

export default ComponentesEstilizados;
