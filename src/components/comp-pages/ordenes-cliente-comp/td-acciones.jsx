import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import FormActualizarEstado from './form-actualizar-estado';
import { BtnOcultarForm, BtnVerForm } from './td-acciones/componentes';
import { toggleForm } from '../../../services/toggle-form-estado-orden';

const TdAcciones = ({ tipo_trabajo, nro_orden, }) => {
  const { id, nombre } = useParams();
  const [verActualizarEstado, setVerActualizarEstado] = useState(false);
  const [mensajeS, setMensajeS] = useState(null);

  const verOpciones = (e) => {
    setVerActualizarEstado(!verActualizarEstado);
    const btnOcultar = document.querySelector(`[data="ocultar${nro_orden}"]`);
    const btnVer = document.querySelector(`[data="ver${nro_orden}"]`);
    const form = document.querySelector(`[data="form${nro_orden}"]`);
    const formContainer = document.querySelector(`[data="form-container${nro_orden}"]`);
    
    toggleForm(btnVer, btnOcultar, form, formContainer);
  };

  return (
    <>
      <Link to={`/pdf/${tipo_trabajo}/${nro_orden}`}><AiOutlineEye /></Link>
      <Link to={`/editar-orden/${tipo_trabajo}/${id}/${nombre}/${nro_orden}`}><AiOutlineEdit /></Link>      
      
      <div className='t-body--td-form-container' data={`form-container${nro_orden}`}>
        <BtnVerForm accion={ verOpciones } data={ nro_orden } />
        <BtnOcultarForm accion={ verOpciones } data={ nro_orden } />
        { mensajeS ? <span>{ mensajeS }</span> : null }
        <FormActualizarEstado tipo={tipo_trabajo} orden={nro_orden} hidden={ verActualizarEstado } setMensajeS={ setMensajeS } />
      </div>
    </>
  );
}

export default TdAcciones;
