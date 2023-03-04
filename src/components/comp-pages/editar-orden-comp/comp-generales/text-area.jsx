import React, { useState } from 'react';

const TextArea = ({ valor, data }) => {
  const [value, setValue] = useState(valor);

  return (
    <div>
      <textarea 
        cols="30" 
        rows="10"
        className='observaciones original'
        onChange={() => {
          setValue(document.querySelector(`[data=${data}]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
          console.log('cambio el text area');
        }}
      >
        { value }
      </textarea>
    </div>
  );
}

export default TextArea;
