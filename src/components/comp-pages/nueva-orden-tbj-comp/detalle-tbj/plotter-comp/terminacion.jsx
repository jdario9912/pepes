import React, { useContext } from 'react';
import { PlotterCompContext } from '../plotter-comp';

const Terminacion = () => {
  const { setTerminacion } = useContext(PlotterCompContext);

  const handleClick = (e) => {
    setTerminacion(e.target.value);
  };

  return (
    <fieldset>
      <legend>Terminación:</legend>
      <div>
        <label onClick={ handleClick }>
          Pelado
          <input type="radio" name="terminacion" onClick={ handleClick } value='Pelado' />
        </label>
        <label onClick={ handleClick }>
          Sin pelar
          <input type="radio" name="terminacion" onClick={ handleClick } value='Sin pelar' />
        </label>
      </div>
    </fieldset>
  );
}

export default Terminacion;
