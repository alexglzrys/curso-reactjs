import React from "react";
import 'bulma/css/bulma.min.css';

/**
 * Bulma en React
 * 
 * Instalación
 *      1. colocar la declaración del CDN en el archivo index.html
 *      2. Instalarlo mediante npm
 * 
 * 
 * Si se instala mediante NPM
 * Lo ideal es importar la librería de Bulma en el archivo principal App.js
 * 
 */

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a href="index.html">@bulmaio</a>.<a href="index.html">#css</a>{" "}
          <a href="index.html">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};

const Bulma = () => {
  return (
    <div>
      <h4>Bulma en React</h4>
      <Card />
    </div>
  );
};

export default Bulma;
