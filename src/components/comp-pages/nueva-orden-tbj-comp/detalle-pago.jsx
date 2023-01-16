import React from 'react';
import InputNumber from '../../input-number';

const DetallePago = () => {
  return (
    <div>
      <h3>Detalle de pago</h3>
      <InputNumber texto='Total: $' />
      <InputNumber texto='Entrega: $' />
      <span>Saldo: $5400</span>
    </div>
  );
}

export default DetallePago;
