import React from 'react';
import '../../../../styles/t-body.css';

const TBody = ({ ordenes }) => {
  return (
    <tbody className='t-body'>
      {
        ordenes.map(({ id, numero, cliente, fechaCreacion, estado, tipoTrabajo, fechaEntrega, horaEntrega}) =>
        <tr key={ id } className='t-body--tr'>
          <td>{ numero }</td>
          <td>{ cliente }</td>
          <td>{ fechaCreacion }</td>
          <td>{ estado }</td>
          <td>{ tipoTrabajo }</td>
          <td>{ fechaEntrega }</td>
          <td>{ horaEntrega }</td>
        </tr>
        )
      }
    </tbody>
  );
}

export default TBody;
