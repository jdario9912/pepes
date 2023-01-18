import React, { useContext } from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';
import { TalonariosCompContext } from '../talonarios-comp';

const Triplicado = () => {
  const { setMostrarColorTriplicado } = useContext(TalonariosCompContext);
  return (
    <fieldset>
      <legend>Triplicado:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('triplicado', 'triplicado-si', 'Si', setMostrarColorTriplicado)} />
        <InputRadio props={ new InputRadioModel('triplicado', 'triplicado-no', 'No', setMostrarColorTriplicado)} />
      </div>
    </fieldset>
  );
}

export default Triplicado;
