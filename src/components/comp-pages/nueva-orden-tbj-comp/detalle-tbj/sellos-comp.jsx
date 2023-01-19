import React from 'react';
import SelecOption from '../../../select-option';
import InputText from '../../../input-text';

const SellosComp = () => {
  const 
    opcionesTipo = ['Madera', 'Automático', 'Pocket', 'Otro']
  ;
  return (
    <div>
      <h5>Sellos</h5>
      <SelecOption texto='Tipo: ' opciones={ opcionesTipo } />
      <InputText texto='Tamaño: ' />
      <InputText texto='Texto: ' />
      <InputText texto='Dibujo: ' />
    </div>
  );
}

export default SellosComp;
