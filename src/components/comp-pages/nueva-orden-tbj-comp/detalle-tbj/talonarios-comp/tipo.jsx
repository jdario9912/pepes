import React from 'react';
import SelectOption from '../../../../select-option';
import { SelectOptionModel } from '../../../../../models/select-option-model';

const Tipo = () => {
  const opcionesTipo = ['Factura C', 'Recibo C', 'Remito R', 'Presupuesto X', 'Recibo X', 'Otros'];
  return (
    <div>
      <SelectOption props={ new SelectOptionModel('Tipo:', '', '', '', 'tipo', opcionesTipo) } />
    </div>
  );
}

export default Tipo;
