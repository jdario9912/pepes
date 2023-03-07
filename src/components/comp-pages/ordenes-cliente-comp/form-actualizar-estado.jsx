import React, { useState } from 'react';
import { BiUpload } from "react-icons/bi";

const FormActualizarEstado = ({orden, tipo, setMensajeS}) => {
  const [isSubmiting, setIsSubmiting] = useState(false);
  
  const handleSubmit = async (e) => {
    const nroOrden = e.target[0].value;
    const tipoTrabajo = e.target[1].value;
    const estado = e.target[2].value;
    const body = {
      nro_orden: nroOrden,
      tipo_trabajo: tipoTrabajo,
      estado: estado
    }

    setIsSubmiting(true);
    
    console.log(body);

    // await actualizaEstadoOrden(urlApi + '/api/actualizar-estado-orden', body)
    //   .then(res => res.json())
    //   .then(({actualizado, mensaje}) => {
    //     if(actualizado){
    //       setReset(actualizado);
    //       setIsSubmiting(false);
    //     } else 
    //       setMensajeS(mensaje);
    //   })
    //   .catch(e => console.log(e))
    // ;
  };

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

export default FormActualizarEstado;
