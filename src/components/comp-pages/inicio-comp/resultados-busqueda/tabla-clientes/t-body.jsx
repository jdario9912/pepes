import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TablaClientesContext } from '../../resultados-busqueda';

const TBody = () => {
  const { clientes } = useContext(TablaClientesContext);
  return (
    <tbody className='t-body'>
        {
          clientes.map(({ id, nombre, telefono, email, observaciones }) =>
            <tr className='t-body--tr' key={ id }>
              <td>{ nombre }</td>
              <td>{ telefono }</td>
              <td>{ email }</td>
              <td>{ observaciones }</td>
              <td>Falta este dato</td>
              <td>
                <Link to='#'>Ver ordenes</Link>
                <Link to='#'>Editar</Link>
              </td>
            </tr>          
          )
        }
      </tbody>
  );
}

export default TBody;
