import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Corte = () => {
  return (
    <fieldset>
      <legend>Corte:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('loma-corte', 'loma-corte-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('loma-corte', 'loma-corte-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Corte;
