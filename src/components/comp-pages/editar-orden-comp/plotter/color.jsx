import React, { useState, useEffect } from 'react';
import { plotterColoresModel } from '../../../../models/plotter-colores-model';
import InputColor from '../../../input-color';

const Color = ({ valor }) => {
  const [codigoColor, setCodigoColor] = useState(valor);
  const [verColores, setVerColores] = useState(false);

  const handleColor = (e) => {
    e.preventDefault();
    setVerColores(!verColores)
  };

  const handleClick = (e) => {
    setVerColores(!verColores);
    setCodigoColor(e.target.firstChild.textContent);
  };

  return (
    <div>
      <div>
        <span>{ codigoColor }</span>
        <input 
          type="text" 
          value={ codigoColor } 
          hidden 
          data='color'
        />
        <input 
          type="color" 
          value={ Object.values(plotterColoresModel.find(item => item[codigoColor]))[0] } 
          disabled 
        />
        <button onClick={ handleColor }>elegir color</button>
      </div>
      {
        verColores ? 
          <div>
            {
              plotterColoresModel.map(color =>
                  <InputColor color={ color } key={ Object.keys(color) } accion={ handleClick } />
              )
            }
          </div> : null
      }
    </div>
  );
}

export default Color;
