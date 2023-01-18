import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const ModeloAnterior = () => {
  return (
    <fieldset>
      <legend>Modelo anterior:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('modelo-anterior', 'modelo-anterior-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('modelo-anterior', 'modelo-anterior-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default ModeloAnterior;
