import React from 'react';
import { Link } from 'react-router-dom';

const TBody = ({ clientes }) => {
  return (
    <tbody>
      {
        clientes.map(({ id, nombre, telefono, email, observaciones, ordenesPendientes }) =>
          <tr key={ id }>
            <td>{ nombre }</td>
            <td>{ telefono }</td>
            <td>{ email }</td>
            <td>{ observaciones }</td>
            <td>{ ordenesPendientes ? 'Si' : 'No' }</td>
            <td><Link to='#'>Ver ordenes</Link></td>
          </tr>          
        )
      }
    </tbody>
  );
}

export default TBody;
