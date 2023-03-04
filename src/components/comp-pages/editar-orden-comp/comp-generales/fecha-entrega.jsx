import React, { useState } from 'react';

const FechaEntrega = ({ valor }) => {
  const [fechaEntrega, setFechaEntrega] = useState(valor);
  return (
    <>
      <input 
        type="date" 
        data='fecha-entrega'
        className='original' 
        value={ fechaEntrega }
        onChange={ () => {
          setFechaEntrega(document.querySelector('[data="fecha-entrega"]').value);
          document.querySelector('[data="fecha-entrega"]').classList.add('cambio');
          document.querySelector('[data="fecha-entrega"]').classList.remove('original')
        }}
      />
    </>
  );
}

export default FechaEntrega;
