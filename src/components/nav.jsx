import React, {
  useContext,
} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import { activeStyle } from '../models/nav-link-active-style-model';
import { HeaderContext } from './header';

const Nav = () => {
  const linkActivo = ({ isActive }) => isActive ? activeStyle : null;
  const { toogleNav, setToogleNav } = useContext(HeaderContext);

  const handleClick = () => setToogleNav(!toogleNav);

  return (
    <nav className='nav' onClick={ handleClick }>
      <ul className='nav-ul'>
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
