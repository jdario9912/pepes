import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Anillado = () => {
  return (
    <fieldset>
      <legend>Anillado:</legend>
      <InputRadio props={ new InputRadioModel('anillado', 'si', 'Si')} />
      <InputRadio props={ new InputRadioModel('anillado', 'no', 'No')} />
    </fieldset>
  );
}

export default Anillado;
