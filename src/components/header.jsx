import React,{
  createContext,
  useState
} from 'react';
import Nav from './nav';
import '../styles/header.css';
import BtnLogout from './btn-logout';
import Hamburguesa from './hamburguesa';
import { BtnLogoutModel } from '../models/btn-logout-model';
import SaludoUsuario from './saludo-usuario';

export const HeaderContext = createContext();

const Header = () => {
  const [toogleNav, setToogleNav] = useState(true);
  const handleClick = () => setToogleNav(!toogleNav);
  return (
    <HeaderContext.Provider value={{toogleNav, setToogleNav}} >
      <div className='header--container'>
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
