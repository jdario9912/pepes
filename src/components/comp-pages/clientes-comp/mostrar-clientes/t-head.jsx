import React from 'react';
import '../../../../styles/t-head.css';

const THead = () => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Mail</th>
        <th>Observaciones</th>
        <th>Ordenes pend.</th>
        <th>Acciones</th>
      </tr>
    </thead>
  );
}

export default THead;
