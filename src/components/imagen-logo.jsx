import React from 'react';
import imgLogo from '../img/logo.png';
import '../styles/imagen-logo.css';

const ImagenLogo = () => {
  return (
    <>
      <img src={ imgLogo } alt="Imagen Logo" className='imagen-logo' /> 
    </>
  );
}

export default ImagenLogo;
