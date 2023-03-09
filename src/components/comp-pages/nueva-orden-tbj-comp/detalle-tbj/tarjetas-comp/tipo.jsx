import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Tipo = () => {
  const opcionesTipo = ['Laser 1/0', 'Laser 4/0', 'Laser 4/1', 'Laser 4/4', '1000 4/1', '1000 4/4', 'Opp mate X1', 'Opp mate X2', 'Uv sector X1', 'Uv sector X2'];
    
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Tipo: ', '', 'select', '', 'tipo', opcionesTipo)} />
    </div>
  );
}

export default Tipo;
