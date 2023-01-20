import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';
import { AppContext } from './app';

const Nav = () => {
  const { setUsuarioLogeado } = useContext(AppContext);
  const cerrarSesion = () => setUsuarioLogeado(false);

  return (
    <nav>
      <ul className='nav-ul'>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/clientes'>Clientes</Link></li>
        <li><Link to='/ordenes'>Ordenes</Link></li>
        <li><Link to='/ordenes-pendientes'>Ordenes Pendientes</Link></li>
        <li><Link to='/agregar-cliente'>Agregar Cliente</Link></li>
        <li><Link to='/nueva-orden'>Nueva Orden</Link></li>
        <li><button onClick={ cerrarSesion }>Cerrar Sesión</button></li>
      </ul>
    </nav>
  );
}

export default Nav;
