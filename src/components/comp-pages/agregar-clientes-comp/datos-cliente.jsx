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
import { enviarDatos } from '../../../services/form-nuevo-cliente/form-nuevo-cliente';
import { urlApi } from '../../../services/url/url-api';

const DatosCliente = () => {
  const [irAlHome, setIrAlHome] = useState(false);
  const [mensajeServidor, setMensajeServidor] = useState(null);
  const [idCliente, setIdCliente] = useState(null);

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
      
    enviarDatos(urlApi + '/api/clientes', nombre, telefono, email, observaciones)
    .then(res => res.json())
    .then(({ mensaje, clienteRegistrado, idCliente }) => {
      setMensajeServidor(mensaje);
      if(clienteRegistrado) window.alert('Cliente registrado con exito');
      setIrAlHome(clienteRegistrado);
      setIdCliente(idCliente);
    })
    .catch(err => console.log(err))
  };

  if(irAlHome) return <Navigate to={`/nueva-orden/${idCliente}`} />;

  return (
    <form onSubmit={ handleSubmit } className='datos-cliente--form'>
      <div className="datos-cliente--inputs-container">
        <InputText props={ new InputTextModel('', 'datos-cliente--label', '', 'Nombre', 'datos-cliente--input', 'nombre')} />
        <InputTel props={ new InputTelModel('', 'datos-cliente--label', '', 'datos-cliente--input', 'Teléfono', 'telefono')} />
        <InputMail props={ new InputMailModel('', 'datos-cliente--label', '', 'Email', 'datos-cliente--input', 'e-mail')} />
        <TextArea props={ new TextAreaModel('', 'datos-cliente--label', '', 'Observaciones', 'datos-cliente--text-area', 'observaciones') } />
      </div>
      <div className="datos-cliente--btn-submit-container">
        { mensajeServidor ? <span className='datos-cliente--msj-error'>{ mensajeServidor }</span> : null }
        <InputSubmit texto='Guardar' estilos='datos-cliente--btn-submint' />
      </div>
    </form>
  );
}

export default DatosCliente;
