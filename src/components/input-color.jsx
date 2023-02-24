import React from 'react';
import '../styles/input-color.css';


const InputColor = ({ color, accion }) => {
  
  return (
    <div onClick={ accion } className='input-color--container'>
      <span>{ Object.keys(color) }</span>
      <input 
        type="color" 
        name={ Object.keys(color) } 
        id={ Object.keys(color) } 
        value={ Object.values(color) }
        disabled
        className='not-action'
       />
    </div>
  );
}

export default InputColor;
