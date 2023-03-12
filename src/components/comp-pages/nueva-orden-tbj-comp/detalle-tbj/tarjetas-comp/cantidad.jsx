import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Cantidad = () => {
  const opcionesCantidad = ['100', '200', '1000', '2000'];
    
  return (
    <>
      <SelectOption props={ new SelectOptionModel('Cantidad: ', '', 'select', '', 'cantidad', opcionesCantidad)} />
    </>
  );
}

export default Cantidad;
