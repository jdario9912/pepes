import React from 'react';
import SelectOption from '../../../../select-option';

const TamanoPapel = () => {
  const opciones = ['A4', 'A5', 'A3', 'Oficio', 'Legal'];
  return (
    <div>
      <SelectOption texto='Tamaño de papel: ' opciones={ opciones } />
    </div>
  );
}

export default TamanoPapel;
