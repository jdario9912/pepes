import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import { activeStyle } from '../models/nav-link-active-style-model';

const Nav = () => {
  const linkActivo = ({ isActive }) => isActive ? activeStyle : null;

  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        <li>
          <NavLink style={ linkActivo } to='/' end>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/clientes'>
            Clientes
          </NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/ordenes'>
            Ordenes
          </NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/ordenes-pendientes'>
            Ordenes Pendientes
          </NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/nuevo-cliente'>
            Nuevo Cliente
          </NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/nueva-orden'>
            Nueva Orden
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
