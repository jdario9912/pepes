import React, { useContext } from 'react';
import InputRadio from '../../../../input-radio';
import { InputRadioModel } from '../../../../../models/input-radio-model';
import { TalonariosCompContext } from '../talonarios-comp';

const TieneLogo = () => {
  const { setMostrarUbicacionLogo } = useContext(TalonariosCompContext);
  return (
    <fieldset>
      <legend>Tiene logo:</legend>
      <div>
        <InputRadio props={ new InputRadioModel('tiene-logo', 'tiene-logo-si', 'Si', setMostrarUbicacionLogo)} />
        <InputRadio props={ new InputRadioModel('tiene-logo', 'tiene-logo-no', 'No', setMostrarUbicacionLogo)} />
      </div>
    </fieldset>
  );
}

export default TieneLogo;
