import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Bolsillo = () => {
  const opcionesBolsillo = ['No', 'Arriba', 'Arriba y abajo'];
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Bolsillo: ', '', 'select', '', 'bolsillo', opcionesBolsillo) } />
    </div>
  );
}

export default Bolsillo;
