import React from 'react';
import '../css/Body.css';
import Form from './Form';

function Body(){
    return(
        <div className='container-body'>
            <Form 
            title='Formulario de reporte de incidencias'
            name='Nombre'
            mail='E-mail'
            mesage='Escribe tu reporte aquí'
            />
        </div>
    );

}

export default Body;