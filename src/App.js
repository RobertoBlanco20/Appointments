import React, {useState, useEffect} from 'react';
import './index.css';
import Formulario from './components/Formulario'
import Citas from './components/Citas'

function App() {

  /* Citas en localStorage */

  let initalAppointmens = JSON.parse(localStorage.getItem('appointments'));

  if(!initalAppointmens){
    initalAppointmens = [];
  }


  /* Arreglo de citas */
  const [appointments, setAppointments ] = useState(initalAppointmens );

  /* UseEffecto que cambia al cargar el documento o al modificar las citas */

  useEffect( () => {
    if(initalAppointmens){
      localStorage.setItem('appointments', JSON.stringify(appointments))
    } else {
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  }, [appointments] )

  /* Pasando la nueva cita y guardando una copia de lo que ya existia */
  const saveAppointment = appointment => {
    setAppointments([
      ...appointments, appointment
    ])
  } 


  /* Filtrar al eliminar una cita */
  const deleteAppointment = id => {
    const filterAppointments = appointments.filter( appointment => appointment.id !== id)
    setAppointments(filterAppointments)
  }

  /* Titulo condicial */
  const titulo = appointments.length > 0 ? 'Administra tus citas' : ' No hay citas '

  return (
    <div className="main">
      <h1>Beauty Salon Appointment's</h1>
      
      <div className='container'>
        <div className="formulario">
            <Formulario
              saveAppointment={saveAppointment}
            />
        </div>
        <div className='citas'>

          <h2>{titulo}</h2>

          {appointments.map( appointment => (
            <Citas
              key={appointment.id}
              appointment={appointment}
              deleteAppointment={deleteAppointment}
            />
          ) )}
        </div>
      </div>
    </div>
  );
}

export default App;
