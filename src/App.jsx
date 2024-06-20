import React from 'react';
import './App.css';
import Componente2 from './componente2'
import Componente3 from './componente3'
import Componente4 from './componente4';
import Componente5 from './componente5';

function App() {
  return (
    <div className="container">
      <div className="content">
        <Componente2 />
        <Componente3 />
        <Componente4 />
        <Componente5 />

      </div>
    </div>
    
  );
}

export default App;
