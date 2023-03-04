import React, { useState, useContext } from 'react';
import '../../../../styles/t-body.css';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import FormActualizarEstadoOrden from './form-actualizar-estado-orden';
import { actualizaEstadoOrden } from '../../../../services/form-actualiza-estado-orden/form-actualiza-estado-orden';
import { urlApi } from '../../../../services/url/url-api';
import { OrdenesPendientesCompContext } from '../../ordenes-pendientes-comp';
import { BtnOcultarForm, BtnVerForm } from './t-body/componentes';

const TBody = ({ ordenesPendientes }) => {
  const { setReset } = useContext(OrdenesPendientesCompContext);
  const [verActualizarEstado, setVerActualizarEstado] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [mensajeS, setMensajeS] = useState(null);

  const handleSubmit = async (e) => {
    const nroOrden = e.target[0].value;
    const tipoTrabajo = e.target[1].value;
    const estado = e.target[2].value;
    const body = {
      nro_orden: nroOrden,
      tipo_trabajo: tipoTrabajo,
      estado: estado
    }

    e.preventDefault();

    setIsSubmiting(true);

    await actualizaEstadoOrden(urlApi + '/api/actualizar-estado-orden', body)
      .then(res => res.json())
      .then(({actualizado, mensaje}) => {
        if(actualizado){
          setReset(actualizado);
          setIsSubmiting(false);
        } else 
          setMensajeS(mensaje);
      })
      .catch(e => console.log(e))
    ;
  };

  const verOpciones = (e) => {
    setVerActualizarEstado(!verActualizarEstado);
    const id = e.target.parentNode.parentNode.id;
    const btnOcultar = document.querySelector(`[data="ocultar${id}"]`);
    const btnVer = document.querySelector(`[data="ver${id}"]`);

    btnOcultar.classList.toggle('btn-hidden');
    btnVer.classList.toggle('btn-hidden');
    e.target.parentNode.lastChild.classList.toggle('form-hidden');
    e.target.parentNode.lastChild.classList.toggle('t-body--form-actualizar-orden');
    e.target.parentNode.classList.toggle('container-absolute');    
  };

  return (
    <tbody className='t-body'>
      {
        ordenesPendientes.map(({ id_cliente, nro_orden, nombre, fecha_creacion, tipo_trabajo, fecha_entrega, hora_entrega }) =>
        <tr key={ nro_orden } className='t-body--tr'>
          <td>{ nro_orden }</td>
          <td>{ nombre }</td>
          <td>{ fecha_creacion }</td>
          <td>{ tipo_trabajo }</td>
          <td>{ fecha_entrega } a las { hora_entrega }</td>
          {/* <td>{ hora_entrega }hs</td> */}
          <td id={ nro_orden }>
            <Link to={`/pdf/${tipo_trabajo}/${nro_orden}`}>
              <AiOutlineEye />
            </Link>
            <div className='t-body--td-form-container'>
              <BtnVerForm accion={ verOpciones } data={ nro_orden } />
              <BtnOcultarForm accion={ verOpciones } data={ nro_orden } />
              { mensajeS ? <span>{ mensajeS }</span> : null }
              <FormActualizarEstadoOrden handleSubmit={ handleSubmit } orden={ nro_orden } tipo={ tipo_trabajo } isSubmiting={ isSubmiting } hidden={ verActualizarEstado } />
            </div>
            <Link to={`/editar-orden/${tipo_trabajo}/${id_cliente}/${nombre}/${nro_orden}`}>
              <AiOutlineEdit />
            </Link>
          </td>
        </tr>        
        )
      }
    </tbody>
  );
}

export default TBody;
