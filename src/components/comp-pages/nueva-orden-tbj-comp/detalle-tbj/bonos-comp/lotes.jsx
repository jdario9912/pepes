import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Lotes = () => {
  const opcionesLotes = ['10', '25', '50', '100'];

  return (
    <div>
      <SelectOption props={ new SelectOptionModel('En lotes de: ', '', 'select', '', 'lotes', opcionesLotes)} />    
    </div>
  );
}

export default Lotes;
