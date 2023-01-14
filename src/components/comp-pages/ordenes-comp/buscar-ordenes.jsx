import React from 'react';
import BtnSubmit from '../../btn-submit';
import InputNumber from '../../input-number';

const BuscarOrdenes = () => {
  return (
    <form>
      <InputNumber texto='Nro. de Orden' />
      <BtnSubmit texto='Buscar' />
    </form>
  );
}

export default BuscarOrdenes;
