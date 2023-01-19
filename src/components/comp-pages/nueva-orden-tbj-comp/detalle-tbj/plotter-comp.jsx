import React from 'react';
import InputText from '../../../input-text';
import Color from './plotter-comp/color';
import Material from './plotter-comp/material';
import Terminacion from './plotter-comp/terminacion';

const PlotterComp = () => {
  return (
    <div>
      <h5>Plotter</h5>
      <InputText texto='Ubicación del archivo: ' />
      <InputText texto='Tamaño: ' />
      <Color />
      <Material />
      <Terminacion />
    </div>
  );
}

export default PlotterComp;
