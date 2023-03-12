import React, { useState, useContext } from 'react';
import '../../../../styles/t-body.css';
import FormActualizarEstadoOrden from './form-actualizar-estado-orden';
import { actualizaEstadoOrden } from '../../../../services/form-actualiza-estado-orden/form-actualiza-estado-orden';
import { urlApi } from '../../../../services/url/url-api';
import { OrdenesPendientesCompContext } from '../../ordenes-pendientes-comp';
import { BtnOcultarForm, BtnVerForm } from './t-body/componentes';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { toggleForm } from '../../../../services/toggle-form-estado-orden';
import { generarFecha } from '../../../../services/generar-fecha';
import { compararFechas } from '../../../../services/comparar-fechas';

const TBody = ({ ordenesPendientes }) => {
  const { setReset } = useContext(OrdenesPendientesCompContext);
  const [verActualizarEstado, setVerActualizarEstado] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [mensajeS, setMensajeS] = useState(null);
  const trNormal = 't-body--tr';
  const trAlert = 't-body--tr pendiente-del-dia';
  const noEntregado = 'no-entregado';
  const tdFlex = '';

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
    const nro_orden = e.target.parentNode.parentNode.id;
    const btnOcultar = document.querySelector(`[data="ocultar${nro_orden}"]`);
    const btnVer = document.querySelector(`[data="ver${nro_orden}"]`);
    const form = document.querySelector(`[data="form${nro_orden}"]`);
    const formContainer = document.querySelector(`[data="form-container${nro_orden}"]`);

    toggleForm(btnVer, btnOcultar, form, formContainer);
  };

  return (
    <tbody className='t-body'>
      {
        ordenesPendientes.map(({ id_cliente, nro_orden, nombre, fecha_creacion, tipo_trabajo, fecha_entrega, hora_entrega }) =>
          <tr 
            key={ nro_orden } 
            className={
              generarFecha(fecha_entrega) === fecha_entrega ? trAlert : trNormal &&
              compararFechas(fecha_entrega) ? noEntregado : trNormal
            }
          >
            <td>{ nro_orden }</td>
            <td>{ tipo_trabajo }</td>
            <td>{ nombre }</td>
            <td>{ fecha_entrega } a las { hora_entrega }</td>
            <td>{fecha_creacion}</td>
            <td id={ nro_orden } className='td-flex td-acciones'>
              <Link to={`/pdf/${tipo_trabajo}/${nro_orden}`}><AiOutlineEye /></Link>

              <Link to={`/editar-orden/${tipo_trabajo}/${id_cliente}/${nombre}/${nro_orden}`}><AiOutlineEdit /></Link>

              <div className='t-body--td-form-container' data={`form-container${nro_orden}`}>
                <BtnVerForm accion={ verOpciones } data={ nro_orden } className='t-body--button' />
                <BtnOcultarForm accion={ verOpciones } data={ nro_orden } />
                { mensajeS ? <span>{ mensajeS }</span> : null }
                <FormActualizarEstadoOrden handleSubmit={ handleSubmit } orden={ nro_orden } tipo={ tipo_trabajo } isSubmiting={ isSubmiting } hidden={ verActualizarEstado } />
              </div>
            </td>
          </tr>        
        )
      }
    </tbody>
  );
}

export default TBody;

// className={ compararFechas(fecha_entrega) ? tdFlex : trNormal }