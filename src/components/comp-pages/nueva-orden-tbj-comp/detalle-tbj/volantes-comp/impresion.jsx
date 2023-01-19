import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Impresion = () => {
  return (
    <fieldset>
      <legend>Impresion:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('impresion', 'impresion-frente', 'Frente')} />
        <InputRadio props={ new InputRadioModel('impresion', 'impresion-frente-dorso', 'Frente y dorso')} />
      </div>
    </fieldset>
  );
}

export default Impresion;
