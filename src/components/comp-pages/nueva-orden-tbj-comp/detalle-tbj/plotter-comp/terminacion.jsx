import React from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';

const Terminacion = () => {
  return (
    <fieldset>
      <legend>Terminación:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('terminacion', 'terminacion-pelado', 'Pelado')} />
        <InputRadio props={ new InputRadioModel('terminacion', 'terminacion-sin-pelar', 'Sin pelar')} />
      </div>
    </fieldset>
  );
}

export default Terminacion;
