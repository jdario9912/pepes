import React from 'react';
import { Link } from 'react-router-dom';
import ImagenLogoHeaderContainer from './imagen-logo-header-container';
import ImagenLogoNombre from './imagen-logo-nombre';
import '../styles/logo.css';

const Logo = () => {
  return (
    <h1 className='logo--h1'>
      <Link to='/'>
        <ImagenLogoNombre />
        <ImagenLogoHeaderContainer />
      </Link>
    </h1>
  );
}

export default Logo;
