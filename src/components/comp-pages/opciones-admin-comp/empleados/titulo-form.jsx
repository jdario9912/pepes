import React from 'react';

const TituloForm = ({ actualiza }) => {
  return (
    <>
      {
        actualiza ? 
          <span className='titulo-form'>editar empleado</span> : 
          <span className='titulo-form'>agregar empleado</span>
      }
    </>
  );
}

export default TituloForm;
