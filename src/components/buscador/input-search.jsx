import React from 'react';

const InputSearch = () => {
  return (
    <>
      <input 
        type="search" 
        name="busqueda" 
        id="busqueda" 
        className='buscador--input' 
        placeholder='cliente - pedido'
        data-busqueda
      />
    </>
  );
}

export default InputSearch;
