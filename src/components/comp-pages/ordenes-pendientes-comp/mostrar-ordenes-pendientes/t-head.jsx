import React from 'react';
import '../../../../styles/t-head.css';

const THead = ({ accion }) => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Nro.</th>
        <th>Cliente</th>
        <th>Creado</th>
        <th><button onClick={ () => accion(false) }>Tipo</button></th>
        <th><button onClick={ () => accion(true) }>Entregar</button></th>
        <th>Acciones</th>
      </tr>
    </thead>
  );
}

export default THead;
