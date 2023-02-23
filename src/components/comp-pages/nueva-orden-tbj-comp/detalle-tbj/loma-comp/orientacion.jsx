import React, { useContext } from 'react';
import { LomaCompContext } from '../loma-comp';

const Orientacion = () => {
  const { setOrientacion } = useContext(LomaCompContext);
  
  const handleClick = (e) => {
    setOrientacion(e.target.value);
  };

  return (
    <fieldset>
      <legend>Orientacion:</legend>
      <div>
        <label onClick={ handleClick }>
          Horizontal
          <input type="radio" name="orientacion" value='Horizontal' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Vertical
          <input type="radio" name="orientacion" value='Vertical' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Orientacion;
