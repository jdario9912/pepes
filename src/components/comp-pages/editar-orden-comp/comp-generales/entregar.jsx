import React from 'react';
import FechaEntrega from './fecha-entrega';
import HoraEntrega from './hora-entrega';

const Entregar = ({ fecha, hora }) => {
  return (
    <div className='flex-row'>
      Entregar el 
      <FechaEntrega valor={ fecha } />,
      a las
      <HoraEntrega valor={ hora } />
      hs
    </div>
  );
}

export default Entregar;
