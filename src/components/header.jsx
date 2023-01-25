import React,{
  createContext,
  useState
} from 'react';
import Nav from './nav';
import '../styles/header.css';
import Logo from './logo';
import BtnLogout from './btn-logout';
import Hamburguesa from './hamburguesa';
import SaludoUsuario from './saludo-usuario';
import { BtnLogoutModel } from '../models/btn-logout-model';

export const HeaderContext = createContext();

const Header = () => {
  const [toogleNav, setToogleNav] = useState(true);
  return (
    <HeaderContext.Provider value={{toogleNav, setToogleNav}} >
      <header className='header'>
        <Hamburguesa />
        <Logo />      
        <Nav />
        <BtnLogout props={ new BtnLogoutModel('Cerrar sesión', 'btn-logout-header')} />
      </header>
      <SaludoUsuario />
    </HeaderContext.Provider>
  );
}

export default Header;
