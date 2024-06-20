import React from 'react';
import Ejercicio1 from './Ejercicio1.png'; // Ensure you have Ejercicio1.png in the same directory

function Componente2() {
  return (
    <div className="exercise-container">
      <div className="exercise-logo">
        <img src={Ejercicio1} alt="Ejercicio1" />
      </div>
      <div className="exercise-details">
        <p>Puxada Frontal</p>
        <p>3 Series, 12 repeticiones</p>
      </div>
    </div>
  );
}

export default Componente2;
