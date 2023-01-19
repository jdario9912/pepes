import React from 'react';
import imgLogo from '../img/logoPepes.png';
import '../styles/imagen-logo-nombre.css';

const ImagenLogoNombre = () => {
  return (
    <>
      <img src={ imgLogo } alt="Imagen Logo y Nombre" className='imagen-logo-nombre--img' />
    </>
  );
}

export default ImagenLogoNombre;
