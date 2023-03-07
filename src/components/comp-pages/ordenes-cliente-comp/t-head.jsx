import React from 'react';
import '../../../styles/t-head.css';

const THead = () => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Nro</th>
        <th>Tipo</th>
        <th>Estado</th>
        <th>Creado</th>
        <th>Entrega</th>
        <th>Atendido</th>
        <th>Acciones</th>
      </tr>
    </thead>
  );
}

export default THead;
