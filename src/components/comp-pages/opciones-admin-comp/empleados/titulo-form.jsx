import React from 'react';

const TituloForm = ({ actualiza }) => {
  return (
    <>
      {actualiza ? <span>editar empleado</span> : <span>agregar empleado</span>}
    </>
  );
}

export default TituloForm;
