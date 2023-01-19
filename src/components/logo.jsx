import React from 'react';
import imgLogo from '../img/logoPepes.png';
import { Link } from 'react-router-dom';
import '../styles/logo.css';

const Logo = () => {
  return (
    <h1>
      <Link to='/'>
        <img src={ imgLogo } alt="Logo Pepe's" className='logo-img' />
      </Link>
    </h1>
  );
}

export default Logo;
