import React, { useContext, useState, useEffect } from 'react';
import { plotterColoresModel } from '../../../../../models/plotter-colores-model';
import InputColor from '../../../../input-color';
import { PlotterCompContext } from '../plotter-comp';
import '../../../../../styles/color-plotter.css';

const Color = () => {
  const { setColor, color } = useContext(PlotterCompContext);
  const [verColores, setVerColores] = useState(false);
  const [colorHexa, setColorHexa] = useState('');

  const handleClick = (e) => {
    setColor(e.target.firstChild.textContent);
    setVerColores(!verColores);
  };

  const handleColor = (e) => {
    e.preventDefault();
    setVerColores(!verColores);
  }

  useEffect(() => {
    setColor(color);
    const objetoColor = plotterColoresModel.find(item => item[color]);
    if(objetoColor) {
      setColorHexa(Object.values(objetoColor)[0]);
    }
  }, [color]);

  useEffect(() => {
    setColorHexa(colorHexa);
  }, [colorHexa]);

  return (
    <div className='color--container'>
      <div className='flex-row gap-1 justify-end items-center'>
        <button onClick={ handleColor } className='button'>Elegir color</button>
        <span className='texto-color'>{ color.length > 0 ? color : '' }</span>
        { colorHexa.length > 0 ? <input type='color' value={ colorHexa } disabled /> : null}
      </div>
      {
        verColores ? 
          <div className="color--container-input">
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
