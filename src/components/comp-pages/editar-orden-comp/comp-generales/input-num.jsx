import React, { useState } from 'react';

const InputNum = ({ valor, data }) => {
  const [value, setValue] = useState(valor);

  return (
    <div>
      <input 
        type="number" 
        data={ data } 
        value={value }
        className='original'
        min='0'
        onChange={() => {
          setValue(document.querySelector(`[data="${data}"]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
        }}
      />
    </div>
  );
}

export default InputNum;
