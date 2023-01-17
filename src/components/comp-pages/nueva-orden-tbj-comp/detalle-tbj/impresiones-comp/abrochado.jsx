import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Abrochado = () => {
  return (
    <fieldset>
      <legend>Abrochado:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('abrochado', 'si', 'Si')} />
        <InputRadio props={ new InputRadioModel('abrochado', 'no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Abrochado;
