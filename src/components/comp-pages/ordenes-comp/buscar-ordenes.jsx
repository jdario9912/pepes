import React from 'react';
import BtnSubmit from '../../btn-submit';
import InputNumber from '../../input-number';
import { InputNumberModel } from '../../../models/input-number-model';

const BuscarOrdenes = () => {
  return (
    <form>
      <InputNumber props={ new InputNumberModel('Nro. de orden: ', '', '', '', 'buscar-ordenes-numero')} />
      <BtnSubmit texto='Buscar' />
    </form>
  );
}

export default BuscarOrdenes;
