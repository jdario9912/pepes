import React from 'react';
import '../../../styles/atendido-por.css';

const AtendidoPor = () => {
  const usuarioActual = localStorage.getItem('usuario-actual');
  return (
    <>
      <p className='atendido-por--p'>Atendido por: <span>{ usuarioActual }</span></p>
    </>
  );
}

export default AtendidoPor;
