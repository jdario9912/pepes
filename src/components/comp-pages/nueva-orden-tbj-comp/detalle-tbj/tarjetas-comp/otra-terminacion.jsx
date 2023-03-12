import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const OtraTerminacion = () => {
  const opcionesCantidad = ['Ninguna', 'Perforado', 'Corte'];
    
  return (
    <>
      <SelectOption props={ new SelectOptionModel('Otra terminación: ', '', 'select', '', 'terminacion', opcionesCantidad)} />
    </>
  );
}

export default OtraTerminacion;
