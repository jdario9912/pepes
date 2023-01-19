import React from 'react';
import SelectOption from '../../../../select-option';

const Material = () => {
  const opciones = ['Vinilo Brillo', 'Vinilo Mate', 'Papel', 'Lona Front', 'Transparente', 'Lona Back', 'Micro'];
  return (
    <div>
      <SelectOption texto='Material: ' opciones={ opciones } />
    </div>
  );
}

export default Material;
