import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Corte = () => {
  return (
    <fieldset>
      <legend>Corte:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('impresiones-corte', 'impresiones-corte-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('impresiones-corte', 'impresiones-corte-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Corte;
