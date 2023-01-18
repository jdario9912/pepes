import React from 'react';
import { InputRadioModel } from '../../../../../models/input-radio-model';
import InputRadio from '../../../../input-radio';

const Orientacion = () => {
  return (
    <fieldset>
      <legend>Orientación:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('orientacion', 'orientacion-vertical', 'Vertical')} />
        <InputRadio props={ new InputRadioModel('orientacion', 'orientacion-apaisado', 'Apaisado')} />
      </div>
    </fieldset>
  );
}

export default Orientacion;
