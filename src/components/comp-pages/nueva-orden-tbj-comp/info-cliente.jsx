import React from 'react';
import '../../../styles/info-cliente.css';
import { VscPerson } from "react-icons/vsc";
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const InfoCliente = ({ props }) => {
  return (
    <div>
      <h3>Datos del cliente</h3>
      <div className="info-cliente--datos-personales-container">
        <div className="info-cliente--nombre-telefono-email">
          <p><VscPerson /> { props.nombre }</p>
          <p><BsTelephoneOutbound /> { props.telefono }</p>
          <p><MdAlternateEmail /> { props.email }</p>
        </div>
        <p>Observaciones: { props.observaciones }</p>
      </div>
    </div>
  );
}

export default InfoCliente;
