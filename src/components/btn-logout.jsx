import React, { useContext } from 'react';
import Button from './button';
import { AppContext } from './app';

const BtnLogout = () => {
  const { setUsuarioLogeado, setUsuario } = useContext(AppContext);

  const logOut = () => {
    localStorage.setItem('usuario-logeado', false);
    setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
    localStorage.setItem('usuario-actual', '');
    setUsuario(localStorage.getItem('usuario-actual'));
  }
  return (
    <div>
      <Button 
        texto={ 'Cerrar Sesión' }
        estilos=''
        onClick={ logOut }
      />
    </div>
  );
}

export default BtnLogout;
