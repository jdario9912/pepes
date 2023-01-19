import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const TipoPapel = () => {
  return (
    <fieldset>
      <legend>Tipo de papel</legend>
      <div>
        <InputRadio props={ new InputRadioModel('tipo-papel', 'tipo-papel-obra', 'Obra')} />
        <InputRadio props={ new InputRadioModel('tipo-papel', 'tipo-papel-ilustracion', 'Ilustración')} />
      </div>
    </fieldset>
  );
}

export default TipoPapel;
