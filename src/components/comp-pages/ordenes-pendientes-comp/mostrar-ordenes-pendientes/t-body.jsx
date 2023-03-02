import React, { useState, useContext } from 'react';
import '../../../../styles/t-body.css';
import { AiOutlineEye, AiOutlineEdit } from "react-icons/ai";
import { Link } from 'react-router-dom';
import FormActualizarEstadoOrden from './form-actualizar-estado-orden';
import { actualizaEstadoOrden } from '../../../../services/form-actualiza-estado-orden/form-actualiza-estado-orden';
import { urlApi } from '../../../../services/url/url-api';
import { OrdenesPendientesCompContext } from '../../ordenes-pendientes-comp';
import { TfiReload } from "react-icons/tfi";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

  const verOpciones = () => setVerActualizarEstado(!verActualizarEstado);

  return (
    <tbody className='t-body'>
      {
        ordenesPendientes.map(({ nro_orden, nombre, tipo_trabajo, fecha_entrega, hora_entrega }) =>
        <tr key={ nro_orden } className='t-body--tr'>
          <td>{ nro_orden }</td>
          <td>{ nombre }</td>
          {/* <td>{ fecha_creacion }</td> */}
          <td>{ tipo_trabajo }</td>
          <td>{ fecha_entrega }</td>
          <td>{ hora_entrega }hs</td>
          <td>
            <Link to={`/pdf/${tipo_trabajo}/${nro_orden}`}>
              <AiOutlineEye />
            </Link>
            <div>
              {
                verActualizarEstado ?
                <button onClick={ verOpciones } >
                  <AiOutlineCloseCircle className='not-action' />
                </button> :
                <button onClick={ verOpciones } >
                  <TfiReload className='not-action' />
                </button>
              }
              {
                verActualizarEstado ?
                  mensajeS ?
                    <span>{ mensajeS }</span> :
                  <FormActualizarEstadoOrden handleSubmit={ handleSubmit } orden={ nro_orden } tipo={ tipo_trabajo } isSubmiting={ isSubmiting } /> :
                  null
              }
            </div>
            <Link to={`#`}>
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
