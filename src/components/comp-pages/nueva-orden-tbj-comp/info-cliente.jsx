import React from 'react';
import '../../../styles/info-cliente.css';
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const InfoCliente = ({props}) => {
  const { nombre, telefono, email, observaciones} = props;
  return (
    <div className='info-cliente--datos-personales-container modulo'>
      <h2>Nueva orden para <span className='nombre'>{ nombre }</span></h2>
      <div className="info-cliente--nombre-telefono-email">
        <p><BsTelephoneOutbound /> { telefono }</p>
        <p><MdAlternateEmail /> { email }</p>
      </div>
      <p className='info-cliente--observaciones'>Observaciones: { observaciones }</p>
    </div>
  );
}

export default InfoCliente;
