import React from 'react';
import '../../../../styles/t-head.css';

const THead = () => {
  return (
    <thead className='t-head'>
      <tr className='t-head--tr'>
        <th>Nro.</th>
        <th>Cliente</th>
        {/* <th>Creación</th> */}
        <th>Trabajo</th>
        <th>Entrega</th>
        <th>Hora</th>
        <th>Acciones</th>
      </tr>
    </thead>
  );
}

export default THead;
