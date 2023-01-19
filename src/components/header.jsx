import React from 'react';
import Nav from './nav';
import '../styles/header.css';
import Logo from './logo';

const Header = () => {
  return (
    <header className='header'>
      <Logo />      
      <Nav />
    </header>
  );
}

export default Header;
