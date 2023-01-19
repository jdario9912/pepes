import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav>
      <ul className='nav-ul'>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/bienvenida'>Bienvenida</Link></li>
        <li><Link to='/clientes'>Clientes</Link></li>
        <li><Link to='/ordenes'>Ordenes</Link></li>
        <li><Link to='/ordenes-pendientes'>Ordenes Pendientes</Link></li>
        <li><Link to='/agregar-cliente'>Agregar Cliente</Link></li>
        <li><Link to='/nueva-orden'>Nueva Orden</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
