import React, { useContext } from 'react';
import { AppContext } from './app';
import '../styles/saludo-usuario.css';
import { AiOutlineSetting } from "react-icons/ai";

const SaludoUsuario = () => {
  const { usuarioActual, permisos } = useContext(AppContext);

  return (
    <div className='saludo-usuario--container'>
      
      <p>Hola! <br /> <strong>{ usuarioActual }</strong></p>
      { permisos ? <AiOutlineSetting /> : null }
    </div>
  );
}

export default SaludoUsuario;
