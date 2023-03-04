import React, {useState } from 'react';

const InputSelect = ({ valor, data, opciones }) => {
  const [value, setValue] = useState(valor);

  return (
    <div className='flex-row'>
      <select 
        value={ value } 
        onChange={ () => {
          setValue(document.querySelector(`[data=${data}]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
        } } 
        data={data} 
        className='original'>
        {
          opciones.map(opcion =>
            <option key={opcion} value={opcion}>{opcion}</option>    
          )
        }
      </select>
    </div>
  );
}

export default InputSelect;
