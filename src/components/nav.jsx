import React, {
  useContext,
} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import { AppContext } from './app';
import { activeStyle } from '../models/nav-link-active-style-model';

const Nav = () => {
  const { setUsuarioLogeado, setUsuario } = useContext(AppContext);
  const cerrarSesion = () => {
    localStorage.setItem('usuario-logeado', false);
    setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
    localStorage.setItem('usuario-actual', '');
    setUsuario(localStorage.getItem('usuario-actual'));
  }

  const linkActivo = ({ isActive }) => isActive ? activeStyle : undefined;

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
            Ordenes
           Pendientes</NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/agregar-cliente'>
            Agregar
           Cliente</NavLink>
        </li>
        <li>
          <NavLink style={ linkActivo } to='/nueva-orden'>
            Nueva
           Orden</NavLink>
        </li>
        <li>
          <button onClick={ cerrarSesion }>
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
