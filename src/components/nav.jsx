import React, {
  useContext,
} from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';
import { activeStyle } from '../models/nav-link-active-style-model';
import { MdPendingActions, MdPostAdd } from "react-icons/md";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AppContext } from './app';
import { SlScreenDesktop } from "react-icons/sl";
import { BsPeople } from "react-icons/bs";
import Buscador from './buscador';

const Nav = () => {
  const linkActivo = ({ isActive }) => isActive ? activeStyle : null;
  const { toogleNav, setToogleNav } = useContext(AppContext);

  const handleClick = () => {
    if(toogleNav)
      setToogleNav(false);
  };

  return (
    <div className="nav--container">
      <p className="nav--p">Opciones</p>
      <nav className='nav' onClick={ handleClick }>
        <ul className='nav--ul'>
          <li>
            <MdPendingActions />
            <NavLink style={ linkActivo } to='/ordenes-pendientes'>
              Pendientes
            </NavLink>
          </li>
          <li>
            <BsPeople />
            <NavLink style={ linkActivo } to='/clientes'>
              Clientes
            </NavLink>
          </li>
          <li>
            <AiOutlineUserAdd />
            <NavLink style={ linkActivo } to='/nuevo-cliente'>
              Nuevo cliente
            </NavLink>
          </li>
          {/* <li>
            <MdPostAdd />
            <NavLink style={ linkActivo } to='/nueva-orden'>
              Nueva orden
            </NavLink>
          </li> */}
          <li>
            <NavLink style={ linkActivo } to='/'>
              Limpiar <span><SlScreenDesktop /></span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Buscador />
    </div>
  );
}

export default Nav;
