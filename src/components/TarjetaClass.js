import React, { Component } from "react";

// Componente de Clase
class TarjetaClass extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default TarjetaClass;