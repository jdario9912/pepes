import React, { useContext } from 'react';
import { AppContext } from './app';
import '../styles/saludo-usuario.css';
import { AiOutlineSetting } from "react-icons/ai";

const SaludoUsuario = () => {
  const { usuarioActual, permisos } = useContext(AppContext);
  const avatar = `https://ui-avatars.com/api/?name=${usuarioActual}&rounded=true`;
  return (
    <div className='saludo-usuario--container'>
      <div>
        <img src={ avatar } alt="avatar" />
      </div>      
      <p>Hola! <br /> <strong>{ usuarioActual }</strong></p>
      { permisos ? <AiOutlineSetting /> : null }
    </div>
  );
}

export default SaludoUsuario;
