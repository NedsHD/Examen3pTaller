import React from 'react';
import Ejercicio2 from './Ejercicio2.png'; 

function Componente3() {
  return (
    <div className="exercise-container">
      <div className="exercise-logo">
        <img src={Ejercicio2} alt="Ejercicio1" />
      </div>
      <div className="exercise-details">
        <p>Remada Curvada</p>
        <p>3 Series, 12 repeticiones</p>
      </div>
    </div>
  );
}

export default Componente3;
