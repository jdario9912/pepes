import React, { useContext } from 'react';
import Button from './button';
import { AppContext } from './app';
import '../styles/btn-logout.css';
import { resetSessionLocal } from '../services/form-login/form-login';

const BtnLogout = ({ props }) => {
  const { setUsuarioLogeado } = useContext(AppContext);

  const logOut = () => {
    resetSessionLocal();
    setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
  }
  return (
    <div className='btn-logout--container'>
      Es todo por hoy?
      <Button 
        texto={ props.texto }
        estilos={ props.estilos }
        onClick={ logOut }
      />
    </div>
  );
}

export default BtnLogout;
