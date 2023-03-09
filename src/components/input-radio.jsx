import React from 'react';

const InputRadio = ({ texto, accion, name, opciones }) => {
  const handleClick = (e) => {
    accion(e.target.value);
  };
   
  return (    
    <fieldset className='fieldset'>
      <span>{texto}:</span>
      <div className="radio-inputs-container">
        {
          opciones.map(({id, value}) => (
            <div key={id}>
              <input type="radio" id={id} name={name} value={value} onClick={ handleClick } hidden />
              <label onClick={ handleClick } htmlFor={id}>{value}</label>
            </div>
          ))
        }
      </div>
    </fieldset>
  );
}

export default InputRadio;
