import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Faz = () => {
  return (
    <fieldset>
      <legend>Faz:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('faz', 'simple', 'Simple') } />
        <InputRadio props={ new InputRadioModel('faz', 'doble', 'Doble') } />
      </div>
    </fieldset>
  );
}

export default Faz;
