import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/t-body.css';

const TBody = ({ clientes }) => {
  return (
    <tbody className='t-body'>
      {
        clientes.map(({ id, nombre, telefono, email, observaciones, ordenesPendientes }) =>
          <tr className='t-body--tr' key={ id }>
            <td>{ nombre }</td>
            <td>{ telefono }</td>
            <td>{ email }</td>
            <td>{ observaciones }</td>
            <td>{ ordenesPendientes ? 'Si' : 'No' }</td>
            <td>
              <Link to='#'>Ver ordenes</Link>
              <Link to={`nueva-orden/${id}`}>crear orden</Link>
              <Link to='#'>Editar</Link>
            </td>
          </tr>          
        )
      }
    </tbody>
  );
}

export default TBody;
