import React from 'react';
import Tipo from './volantes-comp/tipo';
import SelecOption from '../../../select-option';
import Impresion from './volantes-comp/impresion';
import InputText from '../../../input-text';

const VolantesComp = () => {
  const
    opcionesTamano = ['1/4', '1/2', '1/8', 'otro'],
    opcionesCantidad = ['250', '500', '1000', '2000', '5000']
  ;
  return (
    <div>
      <h5>Volantes</h5>
      <Tipo />
      <SelecOption texto='Tamaño: ' opciones={ opcionesTamano } />
      <SelecOption texto='Cantidad: ' opciones={ opcionesCantidad } />
      <Impresion />
      <InputText texto='Ubicación del diseño: ' />
      <InputText texot='Corte o arreglo especial' />
    </div>
  );
}

export default VolantesComp;
