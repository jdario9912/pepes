import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Orientacion = () => {
  return (
    <fieldset>
      <legend>Orientacion:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('orientacion', 'horizontal', 'Horizontal')} />
        <InputRadio props={ new InputRadioModel('orientacion', 'vertical', 'Vertical')} />
      </div>
    </fieldset>
  );
}

export default Orientacion;
