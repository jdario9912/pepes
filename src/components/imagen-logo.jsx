import React from 'react';
import imgLogo from '../img/logo-nombre-blanco.svg';
import '../styles/imagen-logo.css';

const ImagenLogo = () => {
  return (
    <>
      <img src={ imgLogo } alt="Imagen Logo" className='imagen-logo'></img> 
    </>
  );
}

export default ImagenLogo;
