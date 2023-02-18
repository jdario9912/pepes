import React, { useContext } from 'react';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';

const EstadoOrdenTbj = () => {
  const { setEstado } = useContext(NuevaOrdenTbjCompContext);
  
  const handleClick = (e) => {
    setEstado(e.target.value);
  };

  return (
    <fieldset>
      <legend>Estado del Trabajo</legend>
      <div>
        <label onClick={ handleClick }>
          Pendiente
          <input type="radio" name="estado" value='pendiente' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Enviar a Proveedor
          <input type="radio" name="estado" value='enviar a proveedor' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Realizado
          <input type="radio" name="estado" value='realizado' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Entregado
          <input type="radio" name="estado" value='entregado' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default EstadoOrdenTbj;
