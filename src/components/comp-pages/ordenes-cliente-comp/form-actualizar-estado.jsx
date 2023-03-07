import React, { useState, useContext } from 'react';
import { BiUpload } from "react-icons/bi";
import { urlApi } from '../../../services/url/url-api';
import { actualizaEstadoOrden } from '../../../services/form-actualiza-estado-orden/form-actualiza-estado-orden';
import { OrdenesClienteCompContext } from '../ordenes-cliente-comp';
import { toggleForm } from '../../../services/toggle-form-estado-orden';

const FormActualizarEstado = ({orden, tipo, setMensajeS}) => {
  const { setReset } = useContext(OrdenesClienteCompContext);
  const [isSubmiting, setIsSubmiting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const btnOcultar = document.querySelector(`[data="ocultar${orden}"]`);
    const btnVer = document.querySelector(`[data="ver${orden}"]`);
    const form = document.querySelector(`[data="form${orden}"]`);
    const formContainer = document.querySelector(`[data="form-container${orden}"]`);
    const nroOrden = document.querySelector(`[data="nro_orden${orden}"]`).value;
    const tipoTrabajo = document.querySelector(`[data="tipo_trabajo${orden}"]`).value;
    const estado = document.querySelector(`[data="estado${orden}"]`).value;
    
    const body = {
      nro_orden: nroOrden,
      tipo_trabajo: tipoTrabajo,
      estado: estado
    }

    setIsSubmiting(true);
    
    await actualizaEstadoOrden(urlApi + '/api/actualizar-estado-orden', body)
      .then(res => res.json())
      .then(({actualizado, mensaje}) => {
        if(actualizado){
          setReset(actualizado);
          setIsSubmiting(false);
          toggleForm(btnVer, btnOcultar, form, formContainer);
        } else 
          setMensajeS(mensaje);
      })
      .catch(e => console.log(e))
    ;
  };

  return (
    <form 
      onSubmit={ handleSubmit } 
      className='form-hidden' 
      data={`form${orden}`}
    >
      <input type="hidden" data={`nro_orden${orden}`} value={ orden } />
      <input type="hidden" data={`tipo_trabajo${orden}`} value={ tipo } />
      <select name="estado" data={`estado${orden}`}>
        <option type="submit">a proveedor</option>
        <option type="submit">realizado</option>
        <option type="submit">entregado</option>
      </select>
      <button type="submit" disabled={ isSubmiting }><BiUpload /></button>
    </form>
  );
}

export default FormActualizarEstado;
