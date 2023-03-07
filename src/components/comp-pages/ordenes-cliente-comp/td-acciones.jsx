import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import FormActualizarEstado from './form-actualizar-estado';
import { BtnOcultarForm, BtnVerForm } from './td-acciones/componentes';

const TdAcciones = ({ tipo_trabajo, nro_orden, }) => {
  const { id, nombre } = useParams();
  const [verActualizarEstado, setVerActualizarEstado] = useState(false);
  const [mensajeS, setMensajeS] = useState(null);

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
    <>
      <Link to={`/pdf/${tipo_trabajo}/${nro_orden}`}><AiOutlineEye /></Link>
      <Link to={`/editar-orden/${tipo_trabajo}/${id}/${nombre}/${nro_orden}`}><AiOutlineEdit /></Link>      
      
      <div className='t-body--td-form-container'>
        <BtnVerForm accion={ verOpciones } data={ nro_orden } />
        <BtnOcultarForm accion={ verOpciones } data={ nro_orden } />
        { mensajeS ? <span>{ mensajeS }</span> : null }
        <FormActualizarEstado tipo={tipo_trabajo} orden={nro_orden} hidden={ verActualizarEstado } setMensajeS={ setMensajeS } />
      </div>
    </>
  );
}

export default TdAcciones;
