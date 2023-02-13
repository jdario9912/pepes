import React, { useContext } from 'react';
import Button from './button';
import { AppContext } from './app';
import '../styles/btn-logout.css';
import { resetSessionLocal } from '../services/form-login/form-login';
import { useNavigate } from 'react-router-dom';

const BtnLogout = ({ props }) => {
  const { setUsuarioLogeado } = useContext(AppContext);
  const navigate = useNavigate();

  const logOut = () => {
    resetSessionLocal();
    navigate('/');
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
