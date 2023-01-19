import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Tipo = () => {
  return (
    <fieldset>
      <legend>Tipo:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('tipo', 'tipo-color', 'Color')} />
        <InputRadio props={ new InputRadioModel('tipo', 'tipo-grises', 'Escala de grises')} />
      </div>
    </fieldset>
  );
}

export default Tipo;
