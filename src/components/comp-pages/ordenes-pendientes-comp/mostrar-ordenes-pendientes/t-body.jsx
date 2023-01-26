import React from 'react';
import '../../../../styles/t-body.css';

const TBody = ({ ordenesPendientes }) => {
  return (
    <tbody className='t-body'>
      {
        ordenesPendientes.map(({ id, numeroOrden, cliente, fechaCreacion, tipoTrabajo, fechaEntrega, horaEntrega }) =>
        <tr key={ id } className='t-body--tr'>
          <td>{ numeroOrden }</td>
          <td>{ cliente }</td>
          <td>{ fechaCreacion }</td>
          <td>{ tipoTrabajo }</td>
          <td>{ fechaEntrega }</td>
          <td>{ horaEntrega }hs</td>
        </tr>        
        )
      }
    </tbody>
  );
}

export default TBody;
