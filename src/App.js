import React, {useState} from 'react';
import './index.css';
import Formulario from './components/Formulario'

function App() {

  const [appointments, setAppointments ] = useState([]);

  const saveAppointment = appointment => {
    setAppointments([
      ...appointments, appointment
    ])
  } 

  return (
    <div className="main">
      <h1>Appointment's</h1>
      
      <div className='container'>
        <div className="formulario">
            <Formulario
              saveAppointment={saveAppointment}
            />
        </div>
        <div>2</div>
      </div>
    </div>
  );
}

export default App;
