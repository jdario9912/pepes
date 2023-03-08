import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/t-body.css';
import { AiFillEdit } from "react-icons/ai";
import { BsCardChecklist, BsClipboardPlus } from "react-icons/bs";

const TBody = ({ clientes }) => {
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
            <td className='td-observaciones'>{ observaciones }</td>
          </tr>          
        )
      }
    </tbody>
  );
}

export default TBody;
