import React, { useContext } from 'react';
import { TarjetasCompContext } from '../tarjetas-comp';

const OtraTerminacion = () => {
  const { setTerminacion } = useContext(TarjetasCompContext);

  const handleClick = (e) => {
    setTerminacion(e.target.value);
  };

  return (
    <fieldset>
      <legend>Otra terminación:</legend>
      <div>
        <label onClick={ handleClick }>
          Perforado
          <input type="radio" name="otra-terminacion" value="Perforado" onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          Corte
          <input type="radio" name="otra-terminacion" value="Corte" onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default OtraTerminacion;
