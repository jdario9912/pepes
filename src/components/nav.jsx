import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import { activeStyle } from "../models/nav-link-active-style-model";
import { AppContext } from "./app";
import { SlScreenDesktop } from "react-icons/sl";
import Buscador from "./buscador";
import { nav } from "../models/nav";

const Nav = () => {
  const linkActivo = ({ isActive }) => (isActive ? activeStyle : null);
  const { toogleNav, setToogleNav } = useContext(AppContext);

  const handleClick = () => {
    if (toogleNav) setToogleNav(false);
  };

  return (
    <div className="nav--container">
      <p className="nav--p">Opciones</p>
      <nav className="nav" onClick={handleClick}>
        <ul className="nav--ul">
          {nav.map(({ icon, to, label }) => (
            <li key={label}>
              {icon}
              <NavLink style={linkActivo} to={to}>
                {label}
              </NavLink>
            </li>
          ))}

          <li>
            <NavLink style={linkActivo} to="/">
              Limpiar{" "}
              <span>
                <SlScreenDesktop />
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Buscador />
    </div>
  );
};

export default Nav;
