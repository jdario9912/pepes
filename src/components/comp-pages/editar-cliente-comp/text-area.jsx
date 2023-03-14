import React, { useState } from 'react';

const TextArea = ({ valor, data }) => {
  const [value, setValue] = useState(valor);

  return (
    <div>
      Observaciones
      <textarea 
        cols="30" 
        rows="10"
        className='original editar-cliente--observaciones'
        data={ data }
        onChange={() => {
          setValue(document.querySelector(`[data=${data}]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
        }}
      >
        { value }
      </textarea>
    </div>
  );
}

export default TextArea;
