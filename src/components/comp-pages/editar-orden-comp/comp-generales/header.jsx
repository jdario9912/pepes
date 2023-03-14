import React from 'react';

const Header = ({ tipo, numero, nombre }) => {
  return (
    <div className='modulo flex-row justify-between puntas-redondas mb-1'>
      <p>Trabajo: <span className='capitalize'>{tipo}</span></p>
      <p>Orden n° {numero}</p>
      <p>Cliente: <span className='capitalize'>{nombre}</span></p>
    </div>
  );
}

export default Header;
