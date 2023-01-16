import React from 'react';
import InputRadio from '../../input-radio';
import { InputRadioModel } from '../../../models/input-radio-model';

const Muestra = () => {
  return (
    <fieldset>
      <legend>Muestra:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('muestra', 'si', 'Si') } />
        <InputRadio props={ new InputRadioModel('muestra', 'no', 'No') } />
      </div>
    </fieldset>
  );
}

export default Muestra;
