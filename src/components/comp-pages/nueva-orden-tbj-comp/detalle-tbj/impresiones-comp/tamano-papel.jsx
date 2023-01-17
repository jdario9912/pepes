import React from 'react';
import { InputRadioModel } from '../../../../../models/input-radio-model';
import InputRadio from '../../../../input-radio';

const TamanoPapel = () => {
  return (
    <fieldset>
      <legend>Tamaño de papel:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('size', 'a5', 'A5')} />
        <InputRadio props={ new InputRadioModel('size', 'a4', 'A4')} />
        <InputRadio props={ new InputRadioModel('size', 'a3', 'A3')} />
        <InputRadio props={ new InputRadioModel('size', 'oficio', 'Oficio')} />
        <InputRadio props={ new InputRadioModel('size', 'legal', 'Legal')} />
      </div>
    </fieldset>
  );
}

export default TamanoPapel;
