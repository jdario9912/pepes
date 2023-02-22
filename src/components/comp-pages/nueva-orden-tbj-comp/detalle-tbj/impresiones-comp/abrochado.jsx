import React, { useContext } from 'react';
import { ImpresionesCompContext } from '../impresiones-comp';

const Abrochado = () => {
  const { setAbrochado } = useContext(ImpresionesCompContext);

  const handleClick = (e) => {
    setAbrochado(e.target.value)
  }

  return (
    <fieldset>
      <legend>Abrochado:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="abrochado" value='Si' onClick={ handleClick } />  
        </label>        
        <label onClick={ handleClick }>
          No
          <input type="radio" name="abrochado" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Abrochado;
