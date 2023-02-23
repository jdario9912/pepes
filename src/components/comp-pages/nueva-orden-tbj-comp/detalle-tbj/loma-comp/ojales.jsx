import React, { useContext } from 'react';
import { LomaCompContext } from '../loma-comp';

const Ojales = () => {
  const { setOjales } = useContext(LomaCompContext);

  const handleClick = (e) => {
    setOjales(e.target.value);
  };
  
  return (
    <fieldset>
      <legend>Ojales:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="orientacion" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="orientacion" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default Ojales;
