import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Bolsillo = () => {
  return (
    <fieldset>
      <legend>Bolsillo:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('bolsillo', 'no', 'No')} />
        <InputRadio props={ new InputRadioModel('bolsillo', 'arriba', 'Arriba')} />
        <InputRadio props={ new InputRadioModel('bolsillo', 'arriba-abajo', 'Arriba y Abajo')} />
      </div>
    </fieldset>
  );
}

export default Bolsillo;
