import React from 'react';
import { plotterColoresModel } from '../../../../../models/plotter-colores-model';
import InputColor from '../../../../input-color';

const Color = () => {
  return (
    <div>
      <h5>Color</h5> 
        {
          plotterColoresModel.map(color =>
              <InputColor color={ color } key={ Object.keys(color) } />
          )
        }
    </div>
  );
}

export default Color;
