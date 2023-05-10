import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const OtraTerminacion = () => {
  const opcionesTerminacion = ['Ninguna', 'Perforado', 'Corte'];
    
  return (
    <>
      <SelectOption props={ new SelectOptionModel('Otra terminación: ', '', 'select', '', 'terminacion', opcionesTerminacion)} />
    </>
  );
}

export default OtraTerminacion;
