import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Portabaner = () => {
  return (
    <fieldset>
      <legend>Portabaner:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('portabaner', 'si', 'Si')} />
        <InputRadio props={ new InputRadioModel('portabaner', 'no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Portabaner;
