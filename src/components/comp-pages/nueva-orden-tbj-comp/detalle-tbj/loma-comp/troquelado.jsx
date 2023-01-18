import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Troquelado = () => {
  return (
    <fieldset>
      <legend>Troquelado:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('troquelado', 'si', 'Si')} />
        <InputRadio props={ new InputRadioModel('troquelado', 'no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Troquelado;
