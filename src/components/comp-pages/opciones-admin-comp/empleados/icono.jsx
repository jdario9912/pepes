import React from 'react';
import { FaPeopleCarry } from "react-icons/fa";

const Icono = () => {
  return (
    <div className='icono-nombre-panel-admin'>
      <FaPeopleCarry />
      <p className='icono-texto'>Empleados</p>
    </div>
  );
}

export default Icono;
