import React, { useState } from 'react';
import InputMail from '../../input-mail';
import InputTel from '../../input-tel';
import InputText from '../../input-text';
import TextArea from '../../text-area';
import { InputTextModel } from '../../../models/input-text-model';
import InputSubmit from '../../input-submit';
import { InputTelModel } from '../../../models/input-tel-model';
import { InputMailModel } from '../../../models/input-mail-model';
import { TextAreaModel } from '../../../models/text-area-model';
import '../../../styles/datos-cliente.css';
import { Navigate } from 'react-router-dom';

const DatosCliente = () => {
  const [irAlHome, setIrAlHome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const
      inputNombre = document.querySelector('[data="nombre"]'),
      inputTelefono = document.querySelector('[data="telefono"]'),
      inputEmail = document.querySelector('[data="e-mail"]'),
      inputObservaciones = document.querySelector('[data="observaciones"]')
    ;
    const 
      nombre = inputNombre.value,
      telefono = inputTelefono.value,
      email = inputEmail.value,
      observaciones = inputObservaciones.value
    ;
      
    fetch("http://localhost:3001/api/clientes", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre, telefono, email, observaciones })
    })
    .then(res => res.ok ? setIrAlHome(true) : setIrAlHome(false))
  };

  if(irAlHome) return <Navigate to='/' replace={true} />

  return (
    <form onSubmit={ handleSubmit } className='datos-cliente--form'>
      <div className="inputs-container">
        <div className="nombre-telefono-email-contanier">
          <InputText props={ new InputTextModel('Nombre:', 'datos-cliente--label-nombre', '', 'Ingresá el nombre', '', 'nombre')} />
          <InputTel props={ new InputTelModel('Teléfono:', 'datos-cliente--label-telefono', '', '', 'Ingresá el telefono', 'telefono')} />
          <InputMail props={ new InputMailModel('e-mail:', 'datos-cliente--label-email', '', 'Ingresá el e-mail', '', 'e-mail')} />
        </div>
        <TextArea props={ new TextAreaModel('Observaciones:', 'datos-cliente--label-observaciones', '', 'Ingresá observaciones', '', 'observaciones') } />
      </div>
      <InputSubmit texto='Guardar' estilos='' />
    </form>
  );
}

export default DatosCliente;
