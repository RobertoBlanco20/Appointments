import React from 'react';
import './index.css';
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="main">
      <h1>Appointment's</h1>
      
      <div className='container'>
        <div className="formulario">
            <Formulario />
        </div>
        <div>2</div>
      </div>
    </div>
  );
}

export default App;
