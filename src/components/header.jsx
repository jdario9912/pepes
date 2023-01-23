import React from 'react';
import Nav from './nav';
import '../styles/header.css';
import Logo from './logo';
import BtnLogout from './btn-logout';

const Header = () => {
  return (
    <header className='header'>
      <Logo />      
      <Nav />
      <BtnLogout />
    </header>
  );
}

export default Header;
