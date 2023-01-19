import React from 'react';
import { Link } from 'react-router-dom';
import ImagenLogoNombre from './imagen-logo-nombre';

const Logo = () => {
  return (
    <h1>
      <Link to='/'>
        <ImagenLogoNombre />        
      </Link>
    </h1>
  );
}

export default Logo;
