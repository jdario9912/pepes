import React, { useContext} from 'react';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';

const Muestra = () => {
  const { setMuestra } = useContext(NuevaOrdenTbjCompContext);

  const handleClick = (e) => {
    setMuestra(e.target.value);
  }
  return (
    <fieldset className='fieldset' data="muestra">
      <span>Muestra:</span>
      <div className='radio-inputs-container'>
        <input type="radio" name="muestra" id="muestra-si" value='Si' onClick={ handleClick } hidden />  
        <label onClick={ handleClick } htmlFor='muestra-si'>Si</label>

        <input type="radio" name="muestra" id="muestra-no" value='No' onClick={ handleClick } hidden />
        <label onClick={ handleClick } htmlFor='muestra-no'>No</label>        
      </div>
    </fieldset>
  );
}

export default Muestra;
