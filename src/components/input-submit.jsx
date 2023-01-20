import React from 'react';

const InputSubmit = ({ texto, estilos }) => {
  return (
    <>
      <input type="submit" value={ texto } className={ estilos } />
    </>
  );
}

export default InputSubmit;
