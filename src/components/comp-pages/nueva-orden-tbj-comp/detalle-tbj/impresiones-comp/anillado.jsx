import React, { useContext } from 'react';
import { ImpresionesCompContext } from '../impresiones-comp';

const Anillado = () => {
  const { setAnillado } = useContext(ImpresionesCompContext);

  const handleClick = (e) => {
    setAnillado(e.target.value);
  }

  return (
    <fieldset>
      <legend>Anillado:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="anillado" value='Si' onClick={ handleClick } />  
        </label>        
        <label onClick={ handleClick }>
          No
          <input type="radio" name="anillado" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Anillado;
