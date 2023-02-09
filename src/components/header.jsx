import React,{
  createContext,
  useContext
} from 'react';
import Nav from './nav';
import '../styles/header.css';
import BtnLogout from './btn-logout';
import Hamburguesa from './hamburguesa';
import { BtnLogoutModel } from '../models/btn-logout-model';
import SaludoUsuario from './saludo-usuario';
import { AppContext } from './app';

export const HeaderContext = createContext();

const Header = () => {
  const { toogleNav, setToogleNav } = useContext(AppContext);

  const handleClick = () => {
    if(toogleNav)
      setToogleNav(false);
  };

  return (
    <HeaderContext.Provider value={{toogleNav, setToogleNav}} >
      <div className={
        toogleNav ? 'header--container header--container-visible' :
        'header--container'
      }>
        <header className='header' onClick={ handleClick }>
          <Hamburguesa />
          <SaludoUsuario />      
          <Nav />
          <BtnLogout props={ new BtnLogoutModel('Cerrar sesión', 'btn-logout')} />
        </header>
      </div>
    </HeaderContext.Provider>
  );
}

export default Header;
