import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Material = () => {
  return (
    <fieldset>
      <legend>Material:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('material', 'material-autoadhesivo', 'Autoadhesivo')} />
        <InputRadio props={ new InputRadioModel('material', 'material-termotransferible', 'Termotransferible')} />
      </div>
    </fieldset>
  );
}

export default Material;
