import React, { useContext } from 'react';
import { TalonariosCompContext } from '../talonarios-comp';

const TieneLogo = () => {
  const { setTieneLogo, setMostrarUbicacionLogo } = useContext(TalonariosCompContext);

  const handleClick = (e) => {
    setTieneLogo(e.target.value);
    if(e.target.value === 'Si')
      setMostrarUbicacionLogo(true);
    else 
      setMostrarUbicacionLogo(false);
  };
  
  return (
    <fieldset>
      <legend>Tiene logo:</legend>
      <div>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="tiene-logo" value='Si' onClick={ handleClick } />
        </label>
        <label onClick={ handleClick }>
          No
          <input type="radio" name="tiene-logo" value='No' onClick={ handleClick } />
        </label>
      </div>
    </fieldset>
  );
}

export default TieneLogo;
