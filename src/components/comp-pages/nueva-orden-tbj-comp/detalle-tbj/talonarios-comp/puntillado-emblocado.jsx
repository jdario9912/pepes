import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const PuntilladoEmblocado = () => {
  const opcionesPuntillado = ['Simple', 'Doble', 'Sueltas', 'Emblocado'];

  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Puntillado - Emblocado: ', '', '', '', 'puntillado', opcionesPuntillado)} />
    </div>
  );
}

export default PuntilladoEmblocado;
