import React from 'react';
import '../../../styles/info-cliente.css';
import { MdPhoneEnabled } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";

const InfoCliente = ({props}) => {
  const { nombre, telefono, email, observaciones} = props;
  return (
    <div className='info-cliente--datos-personales-container modulo'>
      <h3 className='titulo'>Nueva orden para <span className='nombre'>{ nombre }</span></h3>
      <div className="info-cliente--nombre-telefono-email">
        { telefono !== '' ? <p><MdPhoneEnabled className='icon' />{ ' ' + telefono }</p> : null }
        { email !== '' ? <p><MdAlternateEmail className='icon' />{ ' ' + email }</p> : null }
        { observaciones !== '' ? <p className='info-cliente--observaciones'><GiNotebook className='icon' /> { observaciones }</p> : null}
      </div>
    </div>
  );
}

export default InfoCliente;
