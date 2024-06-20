import React from 'react';
import Ejercicio3 from './Ejercicio3.png'; 

function Componente4() {
  return (
    <div className="exercise-container">
      <div className="exercise-logo">
        <img src={Ejercicio3} alt="Ejercicio1" />
      </div>
      <div className="exercise-details">
        <p>Remada unlateral</p>
        <p>3 Series, 12 repeticiones</p>
      </div>
    </div>
  );
}

export default Componente4;
