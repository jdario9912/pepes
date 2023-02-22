import React from 'react';
import { SelectOptionModel } from '../../../../../models/select-option-model';
import SelectOption from '../../../../select-option';

const Material = () => {
  const opcionesMaterial = ['Vinilo Brillo', 'Vinilo Mate', 'Papel', 'Lona Front', 'Transparente', 'Lona Back', 'Micro'];
  
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Material: ', '', '', '', 'material', opcionesMaterial)} />
    </div>
  );
}

export default Material;
