import React from 'react';
import '../../../../styles/t-body.css';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';

const TBody = ({ ordenesPendientes }) => {
  const handleEditar = (e) => {
    console.log(e.target);
  }
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
          <td>
            <Link to='#'>
              <AiOutlineEye />
            </Link>
            <div>
              <button onClick={ handleEditar } >
                <AiOutlineEdit className='not-action' />
              </button>
            </div>
          </td>
        </tr>        
        )
      }
    </tbody>
  );
}

export default TBody;
