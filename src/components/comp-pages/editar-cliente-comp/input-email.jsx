import React, { useState } from 'react';

const InputEmail = ({ valor, data }) => {
  const [value, setValue] = useState(valor);

  return (
    <div>
      <input 
        type="email" 
        data={ data }
        className='original'
        value={ value }
        onChange={() => {
          setValue(document.querySelector(`[data="${data}"]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
        }}
      />
    </div>
  );
}

export default InputEmail;
