import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Ojales = () => {
  return (
    <fieldset>
      <legend>Ojales:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('ojales', 'ojales-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('ojales', 'ojales-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default Ojales;
