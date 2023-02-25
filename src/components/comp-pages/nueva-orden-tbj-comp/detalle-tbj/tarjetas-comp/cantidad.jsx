import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Cantidad = () => {
  const opcionesCantidad = ['100', '200', '1000', '2000'];
    
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Cantidad: ', '', '', '', 'cantidad', opcionesCantidad)} />
    </div>
  );
}

export default Cantidad;
