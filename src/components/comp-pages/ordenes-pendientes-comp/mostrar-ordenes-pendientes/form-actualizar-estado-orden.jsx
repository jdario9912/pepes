import React from 'react';
import { BiUpload } from "react-icons/bi";

const FormActualizarEstadoOrden = ({ handleSubmit, orden, tipo, isSubmiting }) => {
  return (
    <form 
      onSubmit={ handleSubmit } 
      className='form-hidden' 
    >
      <input type="hidden" data="nro_orden" value={ orden } />
      <input type="hidden" data="tipo_trabajo" value={ tipo } />
      <select name="estado" id="estado">
        <option type="submit">a proveedor</option>
        <option type="submit">realizado</option>
        <option type="submit">entregado</option>
      </select>
      <button type="submit" disabled={ isSubmiting }><BiUpload /></button>
    </form>
  );
}

export default FormActualizarEstadoOrden;
