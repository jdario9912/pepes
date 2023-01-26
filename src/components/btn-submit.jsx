import React from 'react';

const BtnSubmit = ({ texto, estilos }) => {
  return (
    <button type='submit' className={ estilos }>
      { texto }
    </button>
  );
}

export default BtnSubmit;
