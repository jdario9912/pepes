import React from 'react';
import InputText from '../../../input-text';
import InputNumber from '../../../input-number';

const RemerasComp = () => {
  return (
    <div>
      <h5>Remeras</h5>
      <InputText texto='Ubicación del archivo: ' />
      <InputText texto='Talles: ' />
      <InputText texto='Color: ' />
      <InputText texto='Estampa pecho: ' />
      <InputText texto='Estampa espalda: ' />
      <InputText texto='Color estampa: ' />
      <InputNumber texto='Cantidad: ' />
    </div>
  );
}

export default RemerasComp;
