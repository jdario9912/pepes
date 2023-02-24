import React, { useContext } from 'react';
import { PlotterCompContext } from '../plotter-comp';

const Material = () => {
  const { setMaterial } = useContext(PlotterCompContext);
  
  const handleClick = (e) => {
    setMaterial(e.target.value);
  };

  return (
    <fieldset>
      <legend>Material:</legend>
      <div>
        <label onClick={ handleClick }>
          Autoadhesivo
          <input type="radio" name="material" onClick={ handleClick } value='Autoadhesivo' />
        </label>
        <label onClick={ handleClick }>
          Termotransferible
          <input type="radio" name="material" onClick={ handleClick } value='Termotransferible' />
        </label>
      </div>
    </fieldset>
  );
}

export default Material;
