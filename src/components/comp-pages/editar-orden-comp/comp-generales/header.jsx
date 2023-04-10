import React from 'react';

const Header = ({ tipo, numero, nombre }) => {
  return (
    <div className='modulo puntas-redondas editar-orden--header'>
      <p>Trabajo: <span className='capitalize'>{tipo}</span></p>
      <p>Orden n° <span>{numero}</span></p>
      <p>Cliente: <span className='capitalize'>{nombre}</span></p>
    </div>
  );
}

export default Header;
