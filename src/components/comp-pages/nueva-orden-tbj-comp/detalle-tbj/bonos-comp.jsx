import React from 'react';
import SelecOption from '../../../select-option';
import InputNumber from '../../../input-number';

const BonosComp = () => {
  const 
    opcionesTamano = ['1/3', '1/4', '1/6', '1/8'],
    opcionesNumeradores = ['1', '2', '3'],
    opcionesLotes = ['10', '25', '50', '100']
  ;

  return (
    <div>
      <h5>Bonos</h5>
      <p>tipo de papel: es un desplegable con opciones (pedir a pepo)</p>
      <SelecOption texto='Tamaño: ' opciones={ opcionesTamano } />
      <InputNumber texto='Desde número: ' />
      <InputNumber texto='Cantidad: ' />
      <SelecOption texto='Numeradores: ' opciones={ opcionesNumeradores } />
      <SelecOption texto='En lotes de: ' opciones={ opcionesLotes} />
    </div>
  );
}

export default BonosComp;
