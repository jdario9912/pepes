import React from 'react';
import '../../../../styles/t-body.css';

const TBody = ({ ordenesPendientes }) => {
  return (
    <tbody className='t-body'>
      {
        ordenesPendientes.map(({ id, nro_orden, nombre, fecha_creacion, tipo_trabajo, fecha_entrega, hora_entrega }) =>
        <tr key={ nro_orden } className='t-body--tr'>
          <td>{ nro_orden }</td>
          <td>{ nombre }</td>
          <td>{ fecha_creacion }</td>
          <td>{ tipo_trabajo }</td>
          <td>{ fecha_entrega }</td>
          <td>{ hora_entrega }hs</td>
        </tr>        
        )
      }
    </tbody>
  );
}

export default TBody;
