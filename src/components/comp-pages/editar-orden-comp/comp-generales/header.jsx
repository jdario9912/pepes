import React from 'react';

const Header = ({ tipo, numero, nombre }) => {
  return (
    <div>
      <p>Trabajo: <span className='capitalize'>{tipo}</span></p>
      <p>Orden n° {numero}</p>
      <p>Cliente: {nombre}</p>
    </div>
  );
}

export default Header;
