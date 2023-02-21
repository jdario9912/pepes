import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { TablaOrdenContext } from '../../resultados-busqueda';
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const TBody = () => {
  const {orden} = useContext(TablaOrdenContext);
  const { Orden, Cliente, Creado, Estado, Tipo, Fecha, Hora} = orden;
  const [verOpcionesEstado, setVerOpcionesEstado] = useState(false);

  const handleEditar = () => {
    setVerOpcionesEstado(!verOpcionesEstado);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const nroOrden = document.querySelector('[data="nro_orden"]').value;
    const tipoTrabajo = document.querySelector('[data="tipo_trabajo"]').value;
    const estado = document.querySelector('[name="estado"]').value;

    console.log(e.target.value, nroOrden, tipoTrabajo, estado);
  }

  const handleDelete = (e) => {
    console.log(Tipo, Orden);
  }
  
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
          <div onClick={ handleEditar } >
            <AiOutlineEdit className='not-action' />
            <form action="POST" onSubmit={ handleSubmit }>
              <input type="hidden" data="nro_orden" value={ Orden } />
              <input type="hidden" data="tipo_trabajo" value={ Tipo } />
              {
                verOpcionesEstado ?
                  <div name="estado" id="estado">
                    <button type="submit">enviado a proveedor</button>
                    <button type="submit">realizado</button>
                    <button type="submit">entregado</button>
                  </div> :
                  null
              }
            </form>
          </div>
          <button onClick={ handleDelete }>
            <AiOutlineDelete className='not-action' />
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default TBody;
