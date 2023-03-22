import React, { useReducer } from 'react';
import { opcionesPanelAdmin } from '../../models/opciones-panel-admin';
import '../../styles/opciones-admin-comp.css'
import { opcionesAdmin } from '../../services/redux/opciones-admin';
import { FaPeopleCarry, FaClipboardList, FaHistory } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const administrarInicial = '';

const OpcionesAdmin = () => {
  const [administrar, dispatch] = useReducer(opcionesAdmin, administrarInicial);

  return (
    <div>
      <h2>Panel de administrador</h2>
      <div className='opciones-admin--botones-container modulo'>
        <button className='opciones-admin--boton' onClick={() => dispatch({type: 'empleados'})}>
          <div className='icon-texto-container'>
            <FaPeopleCarry />
            Empleados
          </div>
        </button>

        <button className='opciones-admin--boton' onClick={() => dispatch({type: 'clientes'})}>
          <div className='icon-texto-container'>
            <BsPeopleFill />
            Clientes
          </div>
        </button>

        <button className='opciones-admin--boton' onClick={() => dispatch({type: 'ordenes'})}>
          <div className='icon-texto-container'>
            <FaClipboardList />
            Ordenes
          </div>
        </button>

        <button className='opciones-admin--boton' onClick={() => dispatch({type: 'historial'})}>
          <div className='icon-texto-container'>
            <FaHistory />
            Historial
          </div>
        </button>
      </div>
      {
        opcionesPanelAdmin[administrar]
      }
    </div>
  );
}

export default OpcionesAdmin;
