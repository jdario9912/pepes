import React from 'react';
import { InputRadioModel } from '../../../../../models/input-radio-model';
import InputRadio from '../../../../input-radio';

const OtraTerminacion = () => {
  return (
    <fieldset>
      <legend>Otra terminación:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('otra-terminacion', 'otra-terminacion-perforado', 'Perforado')} />
        <InputRadio props={ new InputRadioModel('otra-terminacion', 'otra-terminacion-corte', 'Corte')} />
      </div>
    </fieldset>
  );
}

export default OtraTerminacion;
