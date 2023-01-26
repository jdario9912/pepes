import React from 'react';
import '../../../../styles/t-head.css';

const THead = () => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Nro. Orden</th>
        <th>Cliente</th>
        <th>Fecha Creacion</th>
        <th>Estado</th>
        <th>Tipo Trabajo</th>
        <th>Fecha Entrega</th>
        <th>Hora Entrega</th>
      </tr>
    </thead>
  );
}

export default THead;
