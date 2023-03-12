import React, { useState, useEffect } from 'react';

const InputTieneLogo = ({ valor, data, opciones, accion }) => {
  const [value, setValue] = useState(valor);

  useEffect(() => {
    accion(value === 'No' ? false : true);
  }, [value]);
  
  return (
    <div className='flex-row'>
      <select 
        value={ value } 
        onChange={ () => {
          setValue(document.querySelector(`[data=${data}]`).value);
          document.querySelector(`[data=${data}]`).classList.add('cambio');
          document.querySelector(`[data=${data}]`).classList.remove('original');
          accion(value === 'No' ? false : true);
        } } 
        data={data} 
        className='original'
      >
        {
          opciones.map(opcion =>
            <option key={opcion} value={opcion}>{opcion}</option>    
          )
        }
      </select>
    </div>
  );
}

export default InputTieneLogo;
