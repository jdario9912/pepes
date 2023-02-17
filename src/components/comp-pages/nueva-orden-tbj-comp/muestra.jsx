import React, { useContext} from 'react';
import { NuevaOrdenTbjCompContext } from '../nueva-orden-tbj-comp';

const Muestra = () => {
  const { setMuestra } = useContext(NuevaOrdenTbjCompContext);

  const handleClick = (e) => {
    setMuestra(e.target.value);
  }
  return (
    <fieldset className='input-radio--fieldset' data="muestra">
      <legend className='input-radio--legend'>Muestra:</legend>
      <div className='input-radio--inputs-container'>
        <label onClick={ handleClick }>
          Si
          <input type="radio" name="muestra" id="muestra-si" value='Si' onClick={ handleClick } />  
        </label>        
        <label onClick={ handleClick }>
          No
          <input type="radio" name="muestra" id="muestra-no" value='No' onClick={ handleClick } />
        </label>        
      </div>
    </fieldset>
  );
}

export default Muestra;
