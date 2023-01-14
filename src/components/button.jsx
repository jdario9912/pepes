import React from 'react';

const Button = ({texto, estilos}) => {
  return (
    <button className={ estilos }>
      { texto }
    </button>
  );
}

export default Button;
