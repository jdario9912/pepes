import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TablaOrdenContext } from '../../resultados-busqueda';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const TBody = () => {
  const {orden} = useContext(TablaOrdenContext);
  const { Orden, Cliente, Creado, Estado, Tipo, Fecha, Hora} = orden;
  return (
    <tbody className='t-body'>
      <tr className='t-body--tr'>
        <td>{ Orden }</td>
        <td>{ Cliente }</td>
        <td>{ Creado }</td>
        <td>{ Estado }</td>
        <td>{ Tipo }</td>
        <td>{ Fecha }</td>
        <td>{ Hora }hs</td>
        <td>
          <Link to='#'>
            <AiOutlineEye />
          </Link>
          <Link to='#'>
            <AiOutlineEdit />
          </Link>
          <Link to='#'>
            <AiOutlineDelete />
          </Link>
        </td>
      </tr>
    </tbody>
  );
}

export default TBody;
