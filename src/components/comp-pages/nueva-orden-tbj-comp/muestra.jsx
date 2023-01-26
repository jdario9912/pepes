import React from 'react';
import InputRadio from '../../input-radio';
import { InputRadioModel } from '../../../models/input-radio-model';

const Muestra = () => {
  return (
    <fieldset className='input-radio--fieldset'>
      <legend className='input-radio--legend'>Muestra:</legend>
      <div className='input-radio--inputs-container'>
        <InputRadio props={ new InputRadioModel('muestra', 'muestra-si', 'Si') } />
        <InputRadio props={ new InputRadioModel('muestra', 'muestra-no', 'No') } />
      </div>
    </fieldset>
  );
}

export default Muestra;
