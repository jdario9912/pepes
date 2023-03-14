import React, { useState } from 'react';

const Abono = ({ valor }) => {
  const [value, setValue] = useState(valor);
  const data = 'abono';
  return (
    <div className='flex-column'>
      Abonó
      <select
        value={ value } 
        onChange={ () => {
          setValue(document.querySelector(`[data=${data}]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
        } } 
        data={data} 
        className='original'
      >
        <option value="efectivo">En efectivo</option>
        <option value="debito">Por débito</option>
        <option value="transferencia">Por transferencia</option>
      </select>
    </div>

  );
}

export default Abono;
