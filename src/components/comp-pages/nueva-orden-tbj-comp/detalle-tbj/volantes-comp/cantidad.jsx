import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Cantidad = () => {
  const opcionesCantidad = ['250', '500', '1000', '2000', '5000'];
  
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Cantidad: ', '', 'select', '', 'cantidad', opcionesCantidad)} />
    </div>
  );
}

export default Cantidad;
