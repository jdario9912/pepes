import React, { useContext } from 'react';
import { BonosCompContext } from '../bonos-comp';

const Tipo = () => {
  const { setTipo } = useContext(BonosCompContext);

  const handleClick = (e) => {
    setTipo(e.target.value);
  }
  return (
    <fieldset className='fieldset'>
      <span>Tipo:</span>
      <div className="radio-inputs-container">
        <input type="radio" name="tipo" id='obra' value='Obra' onClick={ handleClick } hidden />
        <label onClick={ handleClick } htmlFor='obra'>Obra</label>

        <input type="radio" name="tipo" id='ilustracion' value='Ilustración' onClick={ handleClick } hidden />
        <label onClick={ handleClick } htmlFor='ilustracion'>Ilustración</label>
      </div>
    </fieldset>
  );
}

export default Tipo;
