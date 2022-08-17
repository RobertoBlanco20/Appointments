import React from 'react';

const Citas = ({appointment, deleteAppointment}) => {
    
    return( 
    <div className='citas-box'>
        <p> Nombre: <span> {appointment.name}</span> </p>
        <p> Servicio:  <span>{appointment.service1}</span> </p>
        { appointment.service2.length > 0  ?  <p> Servicio:  <span>{appointment.service2}</span> </p>  : null  }
        { appointment.service3.length > 0  ?  <p> Servicio:  <span>{appointment.service3}</span> </p> : null}
        <p> Fecha:  <span>{appointment.date}</span> </p>
        <p> Hora:  <span>{appointment.hour}</span> </p>
        { appointment.notes.length > 0  ?  <p> Notas:  <span>{appointment.notes}</span> </p> : null}


        
        <button
            className="eliminar"
            onClick={ () => deleteAppointment(appointment.id)}
        > Eliminar &times;</button>

    </div>

 )};

 
export default Citas;