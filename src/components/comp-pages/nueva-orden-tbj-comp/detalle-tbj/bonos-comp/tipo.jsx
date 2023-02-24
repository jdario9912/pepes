import React, { useContext } from 'react';
import { BonosCompContext } from '../bonos-comp';

const Tipo = () => {
  const { setTipo } = useContext(BonosCompContext);

  const handleClick = (e) => {
    setTipo(e.target.value);
  }
  return (
    <fieldset>
      <legend>Tipo</legend>
      <label onClick={ handleClick } >
        Obra
        <input type="radio" name="tipo" value='Obra' onClick={ handleClick } />
      </label>
      <label onClick={ handleClick } >
        Ilustración
        <input type="radio" name="tipo" value='Ilustración' onClick={ handleClick } />
      </label>
    </fieldset>
  );
}

export default Tipo;
