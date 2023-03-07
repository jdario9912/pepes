import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/t-body.css';

const TBody = ({ clientes }) => {
  return (
    <tbody className='t-body'>
      {
        clientes.map(({ id, nombre, telefono, email, observaciones }) =>
          <tr className='t-body--tr' key={ id }>
            <td>{ nombre }</td>
            <td>{ telefono }</td>
            <td>
              <Link to={`/ordenes-cliente/${id}/${nombre}`}>ver ordenes</Link>
              <Link to={`/nueva-orden/${id}`}>crear orden</Link>
              <Link to={`/editar-cliente/${id}`}>Editar</Link>
            </td>
            <td>{ email }</td>
            <td className='td-observaciones'>{ observaciones }</td>
          </tr>          
        )
      }
    </tbody>
  );
}

export default TBody;
