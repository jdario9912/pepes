import React, { useContext } from 'react';
import Button from './button';
import { AppContext } from './app';
import '../styles/btn-logout.css';

const BtnLogout = ({ props }) => {
  const { setUsuarioLogeado, setUsuarioActual } = useContext(AppContext);

  const logOut = () => {
    localStorage.setItem('usuario-logeado', false);
    setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
    localStorage.setItem('usuario-actual', '');
    setUsuarioActual(localStorage.getItem('usuario-actual'));
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
