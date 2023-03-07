import React from 'react';
import '../../../styles/t-body.css';
import TdAcciones from './td-acciones';

const TBody = ({ ordenes }) => {
  return(
    <tbody>
      {
        ordenes.map(({ nro_orden, tipo_trabajo, estado, fecha_creacion, fecha_entrega, atendido_por }) =>
          <tr key={ nro_orden } className='t-body--tr'>
            <td>{ nro_orden }</td>
            <td>{ tipo_trabajo }</td>
            <td>{ estado }</td>
            <td>{ fecha_creacion }</td>
            <td>{ fecha_entrega }</td>
            <td>{ atendido_por }</td>
            <td><TdAcciones 
                  tipo_trabajo={ tipo_trabajo} 
                  nro_orden={ nro_orden }
                />
            </td>
          </tr>  
        )
      }
    </tbody>
  )
}

export default TBody;
