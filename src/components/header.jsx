import React,{
  createContext,
  useState
} from 'react';
import Nav from './nav';
import '../styles/header.css';
import Logo from './logo';
import BtnLogout from './btn-logout';
import Hamburguesa from './hamburguesa';

export const HeaderContext = createContext();

const Header = () => {
  const [toogleNav, setToogleNav] = useState(false);
  return (
    <HeaderContext.Provider value={{toogleNav, setToogleNav}} >
      <header className='header'>
        <Hamburguesa />
        <Logo />      
        <Nav />
        <BtnLogout />
      </header>
    </HeaderContext.Provider>
  );
}

export default Header;
