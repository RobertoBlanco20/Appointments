import React, {useState} from 'react';
import './index.css';
import Formulario from './components/Formulario'
import Citas from './components/Citas'

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
        <div className='citas'>

          <h2>Citas</h2>

          {appointments.map( appointment => (
            <Citas
              appointment={appointment}
              key={appointment.id}
            />
          ) )}
        </div>
      </div>
    </div>
  );
}

export default App;
