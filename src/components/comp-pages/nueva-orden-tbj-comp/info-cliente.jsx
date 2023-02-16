import React from 'react';
import '../../../styles/info-cliente.css';
import { VscPerson } from "react-icons/vsc";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const InfoCliente = ({props}) => {
  const { nombre, telefono, email, observaciones} = props;
  return (
    <div className='modulo'>
      <h3>Datos del cliente</h3>
      <div className="info-cliente--datos-personales-container">
        <div className="info-cliente--nombre-telefono-email">
          <p><VscPerson /> { nombre }</p>
          <p><BsTelephoneOutbound /> { telefono }</p>
          <p><MdAlternateEmail /> { email }</p>
        </div>
        <p>Observaciones: { observaciones }</p>
      </div>
    </div>
  );
}

export default InfoCliente;
