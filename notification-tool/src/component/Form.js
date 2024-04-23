import React from 'react';
import '../css/Form.css';

function Form(props) {
  return (
    <div className='container-form'>
      <div className='title-form'>
        <p>{props.title}</p>
      </div>
      <form method='POST' action='' className='form body-form'>
        <div className='form-element'>
          <label>{props.name}:</label>
          <input type='text' id='' name='' required />
        </div>
        <div className='form-element'>
          <label>{props.mail}:</label>
          <input type='email' id='' name='' required />
        </div>
        <div className='form-element'>
          <label>{props.mesage}:</label>
          <textarea id='' name=''></textarea>
        </div>
        <button className='form-button' type='submit'>Enviar</button>
      </form>
    </div>
  );

}

export default Form;