import React from 'react';
import { BiUpload } from "react-icons/bi";

const FormActualizarEstadoOrden = ({ handleSubmit, Orden, Tipo, isSubmiting}) => {
  return (
    <form action="POST" onSubmit={ handleSubmit } className='t-body--form-actualizar-orden'>
      <input type="hidden" data="nro_orden" value={ Orden } />
      <input type="hidden" data="tipo_trabajo" value={ Tipo } />
      <select name="estado" id="estado">
        <option type="submit">enviado a proveedor</option>
        <option type="submit">realizado</option>
        <option type="submit">entregado</option>
      </select>
      <button type="submit" disabled={ isSubmiting }><BiUpload /></button>
    </form>
  );
}

export default FormActualizarEstadoOrden;
