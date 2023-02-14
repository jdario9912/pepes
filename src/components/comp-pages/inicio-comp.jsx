import React from 'react';
import '../../styles/inicio-comp.css';
import { Outlet } from 'react-router-dom';
import Buscador from '../buscador';

const InicioComp = () => {
  return (
    <div className='inicio-comp--container'>
      <Buscador />
      <Outlet />
    </div>
  );
}

export default InicioComp;
