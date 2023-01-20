import React, { useContext } from 'react';
import { AppContext } from './app';
import '../styles/saludo-usuario.css';

const SaludoUsuario = () => {
  const { usuario } = useContext(AppContext);
  return (
    <>
      <span className='saludo-usuario'>Hola, { usuario }!</span>
    </>
  );
}

export default SaludoUsuario;
