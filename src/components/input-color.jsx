import React from 'react';

const InputColor = ({ color }) => {
  return (
    <div>
      <span>{ Object.keys(color) }</span>
      <input 
        type="color" 
        name={ Object.keys(color) } 
        id={ Object.keys(color) } 
        value={ Object.values(color) }
        disabled
       />
    </div>
  );
}

export default InputColor;
