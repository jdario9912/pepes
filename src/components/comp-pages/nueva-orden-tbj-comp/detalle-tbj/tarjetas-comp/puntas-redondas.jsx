import React from 'react';
import { InputRadioModel } from '../../../../../models/input-radio-model';
import InputRadio from '../../../../input-radio';

const PuntasRedondas = () => {
  return (
    <fieldset>
      <legend>Puntas redondeadas:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('puntas-redondas', 'puntas-redondas-si', 'Si')} />
        <InputRadio props={ new InputRadioModel('puntas-redondas', 'puntas-redondas-no', 'No')} />
      </div>
    </fieldset>
  );
}

export default PuntasRedondas;
