import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Papel = () => {
  const opcionesPapel = ['Ilustración', 'Obra', 'Madera'];

  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Papel: ', '', 'select', '', 'papel', opcionesPapel)} />
    </div>
  );
}

export default Papel;
