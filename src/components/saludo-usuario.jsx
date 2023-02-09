import React from 'react';
import '../styles/saludo-usuario.css';
import { AiOutlineSetting } from "react-icons/ai";

const SaludoUsuario = () => {
  const usuarioActual = localStorage.getItem('usuario-actual');
  const avatar = `https://ui-avatars.com/api/?name=${usuarioActual}&rounded=true`;
  const permisos = JSON.parse(localStorage.getItem('permisos'));

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
