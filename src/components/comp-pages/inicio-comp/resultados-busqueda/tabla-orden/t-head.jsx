import React from 'react';

const THead = () => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Orden</th>
        <th>Cliente</th>
        <th>Creado</th>
        <th>Estado</th>
        <th>Tipo Trabajo</th>
        <th>Fecha Entrega</th>
        <th>Hora Entrega</th>
        <th>Acciones</th>
      </tr>
    </thead>
  );
}

export default THead;
