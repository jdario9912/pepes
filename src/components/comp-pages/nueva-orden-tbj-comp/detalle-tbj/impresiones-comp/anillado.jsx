import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Anillado = () => {
  return (
    <fieldset>
      <legend>Anillado:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('anillado', 'anillado-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('anillado', 'anillado-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Anillado;
