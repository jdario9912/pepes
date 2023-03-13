import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TablaClientesContext } from '../../resultados-busqueda';
import { BsCardChecklist, BsClipboardPlus } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

const TBody = () => {
  const { clientes } = useContext(TablaClientesContext);
  return (
    <tbody className='t-body'>
        {
          clientes.map(({ id, nombre, telefono, email, observaciones }) =>
            <tr className='t-body--tr' key={ id }>
              <td>{ nombre }</td>
              <td>{ telefono }</td>
              <td className='td-flex'>
                <Link to={`/ordenes-cliente/${id}/${nombre}`} className='flex-column amarillo'>
                  <BsCardChecklist />
                  <span className='legend'>ver ordenes</span>
                </Link>

                <Link to={`/nueva-orden/${id}`} className='flex-column amarillo'>
                  <BsClipboardPlus />
                  <span className='legend'>crear orden</span>
                </Link>

                <Link to={`/editar-cliente/${id}`} className='flex-column amarillo'>
                  <AiFillEdit />
                  <span className='legend'>editar</span>
                </Link>
              </td>
              <td>{ email }</td>
              <td>{ observaciones }</td>
              {/* <td>Falta este dato</td> */}
            </tr>          
          )
        }
      </tbody>
  );
}

export default TBody;
