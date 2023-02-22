import React, { useContext } from 'react';
import { ImpresionesCompContext } from '../impresiones-comp';

const Orientacion = () => {
  const { setOrientacion } = useContext(ImpresionesCompContext);
  
  const handleClick = (e) => {
    setOrientacion(e.target.value);
  }
  return (
    <fieldset>
      <legend>Orientación:</legend>
      <div>
        <label onClick={ handleClick }>
          Vertical
          <input type="radio" name="orientacion" value='Vertical' onClick={ handleClick } />  
        </label>        
        <label onClick={ handleClick }>
          Apaisado
          <input type="radio" name="orientacion" value='Apaisado' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Orientacion;
