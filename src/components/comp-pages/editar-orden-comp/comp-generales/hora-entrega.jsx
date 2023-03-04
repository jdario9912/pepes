import React, { useState } from 'react';

const HoraEntrega = ({ valor }) => {
  const [horaEntrega, setHoraEntrega] = useState(valor);

  return (
    <>
      <input 
        type="time" 
        data='hora-entrega' 
        className='original'
        value={ horaEntrega }
        onChange={ () => {
          setHoraEntrega(document.querySelector('[data="hora-entrega"]').value);
          document.querySelector('[data="hora-entrega"]').classList.add('cambio');
          document.querySelector('[data="hora-entrega"]').classList.remove('original');
        }}
      />
    </>
  );
}

export default HoraEntrega;
