import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Portabaner = () => {
  return (
    <fieldset>
      <legend>Portabaner:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('portabaner', 'portabaner-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('portabaner', 'portabaner-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Portabaner;
