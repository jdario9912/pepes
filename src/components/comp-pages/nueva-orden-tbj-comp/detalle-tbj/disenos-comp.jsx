import React from 'react';
import InputText from '../../../input-text';
import TextArea from '../../../text-area';

const DisenosComp = () => {
  return (
    <div>
      <h5>Diseños</h5>
      <InputText texto='Ubicación archivo diseño: ' />
      <TextArea texto='Detalles: ' />
      <TextArea texto='Adjuntar bocetos en papel: ' />
    </div>
  );
}

export default DisenosComp;
