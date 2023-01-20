import React from 'react';
import imgLogoNombre from '../img/logo-nombre.png';
import '../styles/imagen-logo-nombre.css';

const ImagenLogoNombre = () => {
  return (
    <>
      <img src={ imgLogoNombre } alt="Imagen Logo y Nombre" className='imagen-logo-nombre--img' />
    </>
  );
}

export default ImagenLogoNombre;
