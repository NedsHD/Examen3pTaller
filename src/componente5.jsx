import React from 'react';
import Ejercicio4 from './Ejercicio4.png'; 

function Componente5() {
  return (
    <div className="exercise-container">
      <div className="exercise-logo">
        <img src={Ejercicio4} alt="Ejercicio1" />
      </div>
      <div className="exercise-details">
        <p>Levantamiento terra</p>
        <p>3 Series, 12 repeticiones</p>
      </div>
    </div>
  );
}

export default Componente5;
