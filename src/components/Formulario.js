import React, {Fragment} from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({saveAppointment}) => {

    /* Modificar el state */
    const [appointment, setAppointment] = useState({
        name: '',
        service1: '',
        service2: '',
        service3: '',
        date: '',
        hour: '',
        notes: ''
    })

    /* State que toma error en caso de que los campos esten vacios */
    const [error, setError] = useState(false)

    /* Funcion que modifica el state */
    const handleChange = (e) => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }

    /* Extraer los valores */
    const { name, service1, service2, service3, date, hour, notes} = appointment

    const addAppointment = e => {
        e.preventDefault();
        
        
        // Validar formulario
        if( name.trim() === '' || service1.trim() === '' || date.trim() === '' || hour.trim() === '' ){
            setError(true)
            return
        }

        /* Eliminar el mensaje previo  */
        setError(false)

        // Agregarle ID
        appointment.id = uuidv4();

        // Crear la cita
        saveAppointment(appointment)

        // Reiniciar el form
        setAppointment({
            name: '',
            service1: '',
            service2: '',
            service3: '',
            date: '',
            hour: '',
            notes: ''
        })
    }

    return ( 
        <Fragment>
            <form 
                onSubmit={addAppointment}
            >

                <h2>Crear Cita</h2>

                { error ?  <p className="error">Hay campos obligatorios sin completar.</p>  :  null  }

                <label>Name:</label>
                <input 
                    type="text"
                    name='name'
                    onChange={handleChange}
                    value={name}
                />

                <label>Service 1:</label>
                <select 
                    name='service1'
                    onChange={handleChange}
                    value={service1}
                >
                    <option value="">No especificado</option>  
                    <option value="Corte">Corte</option>
                    <option value="Alisado">Alisado</option>
                    <option value="Botox Capilar">Botox Capilar</option>
                    <option value="Tintura">Tintura</option>
                    <option value="Lavado">Lavado</option>                  
                </select>

                <label>Service 2:</label>
                <select 
                    name='service2'
                    onChange={handleChange}
                    value={service2}
                    >
                    <option value="">No especificado</option>    
                    <option value="Corte">Corte</option>
                    <option value="Alisado">Alisado</option>
                    <option value="Botox Capilar">Botox Capilar</option>
                    <option value="Tintura">Tintura</option>
                    <option value="Lavado">Lavado</option>                  
                </select>

                <label>Service 3:</label>
                <select 
                    name='service3'
                    onChange={handleChange}
                    value={service3}
                    >
                    <option value="">No especificado</option>     
                    <option value="Corte">Corte</option>
                    <option value="Alisado">Alisado</option>
                    <option value="Botox Capilar">Botox Capilar</option>
                    <option value="Tintura">Tintura</option>
                    <option value="Lavado">Lavado</option>                  
                </select>

                <label>Date:</label>
                <input 
                    type="date"
                    name='date'
                    onChange={handleChange}
                    value={date}
                />
                               
                
                <label>Hour:</label>
                <input 
                    type="time"
                    name='hour'
                    onChange={handleChange}
                    value={hour}
                />
                
                <label>Notes:</label>
                <textarea
                    name='notes'
                    onChange={handleChange}
                    value={notes}
                ></textarea>

                <button 
                    type='submit'
                    className='button'
                >Save cite</button>

            </form>
        </Fragment>

     );
}
 
export default Formulario;