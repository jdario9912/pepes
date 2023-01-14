import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to='/'>Main</Link></li>
        <li><Link to='/clientes'>Clientes</Link></li>
        <li><Link to='/ordenes'>Ordenes</Link></li>
        <li><Link to='/ordenes-pendientes'>Ordenes Pendientes</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
