import React from 'react';
import '../styles/saludo-usuario.css';
import { AiOutlineSetting } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { activeStyleTools } from '../models/nav-link-active-style-model';

const SaludoUsuario = () => {
  const usuarioActual = localStorage.getItem('usuario-actual');
  const avatar = `https://ui-avatars.com/api/?name=${usuarioActual}&rounded=true`;
  const iconoToolsActivo = ({ isActive }) => isActive ? activeStyleTools : null;
  const permisos = JSON.parse(localStorage.getItem('permisos'));
  return (
    <div className='saludo-usuario--container'>
      <div className="saludo-usuario--avatar-texto-container">
        <div className='saludo-usuario--avatar-container'>
          <img src={ avatar } alt="avatar" className='saludo-usuario--avatar' />
        </div>      
        <p className='saludo-usuario--texto'>Hola! <br /> <strong>{ usuarioActual }</strong></p>
      </div>
      { permisos ? 
        <NavLink style={ iconoToolsActivo } to='/panel-admin'>
          <AiOutlineSetting />
        </NavLink> : 
        null
      }
    </div>
  );
}

export default SaludoUsuario;
