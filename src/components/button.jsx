import React from 'react';

const Button = ({ texto, estilos, onClick }) => {
  if (onClick) {
    return (
      <button className={ estilos } onClick={ onClick } >
      { texto }
      </button>
    );
  } else {
    return (
      <button className={ estilos } >
      { texto }
      </button>
    );  
  }
}

export default Button;
