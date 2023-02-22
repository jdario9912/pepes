import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TablaOrdenContext } from '../../resultados-busqueda';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";
import { urlApi } from '../../../../../services/url/url-api';
import { actualizaEstadoOrden } from '../../../../../services/form-actualiza-estado-orden/form-actualiza-estado-orden';

const TBody = () => {
  const navigate = useNavigate();
  const {orden} = useContext(TablaOrdenContext);
  const { Orden, Cliente, Creado, Estado, Tipo, Fecha, Hora} = orden;
  const [verOpcionesEstado, setVerOpcionesEstado] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [mensajeS, setMensajeS] = useState(null);

  const handleEditar = () => {
    setVerOpcionesEstado(!verOpcionesEstado);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const nroOrden = document.querySelector('[data="nro_orden"]').value;
    const tipoTrabajo = document.querySelector('[data="tipo_trabajo"]').value;
    const estado = document.querySelector('[name="estado"]').value;
    const body = { 
      nro_orden: nroOrden,
      tipo_trabajo: tipoTrabajo,
      estado: estado
    };

    setIsSubmiting(true);

    actualizaEstadoOrden(urlApi + '/api/actualizar-estado-orden', body)
      .then(res => res.json())
      .then(({actualizado, mensaje}) => {
        actualizado ? navigate('/ordenes-pendientes') : setMensajeS(mensaje)
      })
      .catch(e => console.log(e))
    ;
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
          <div>
              {
                verOpcionesEstado ?
                  mensajeS ?
                    <span>{ mensajeS }</span> :
                    <form action="POST" onSubmit={ handleSubmit } className='t-body--form-actualizar-orden'>
                      <input type="hidden" data="nro_orden" value={ Orden } />
                      <input type="hidden" data="tipo_trabajo" value={ Tipo } />
                      <select name="estado" id="estado">
                        <option type="submit">enviado a proveedor</option>
                        <option type="submit">realizado</option>
                        <option type="submit">entregado</option>
                      </select>
                      <button type="submit" disabled={ isSubmiting }><BiUpload /></button>
                    </form> :
                    <button onClick={ handleEditar } >
                      <AiOutlineEdit className='not-action' />
                    </button>
              }
          </div>
        </td>
      </tr>
    </tbody>
  );
}

export default TBody;
