import React from 'react';
import InputMail from '../../input-mail';
import InputTel from '../../input-tel';
import InputText from '../../input-text';
import TextArea from '../../text-area';
import { InputTextModel } from '../../../models/input-text-model';
import InputSubmit from '../../input-submit';
import { InputTelModel } from '../../../models/input-tel-model';
import { InputMailModel } from '../../../models/input-mail-model';
import { TextAreaModel } from '../../../models/text-area-model';

const DatosCliente = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const
      inputNombre = document.querySelector('[data="nombre"]'),
      inputTelefono = document.querySelector('[data="telefono"]'),
      inputEmail = document.querySelector('[data="e-mail"]'),
      inputObservaciones = document.querySelector('[data="observaciones"]')
    ;

    console.log(
      inputNombre.value,
      inputEmail.value,
      inputTelefono.value,
      inputObservaciones.value
    )
  };
  return (
    <form onSubmit={ handleSubmit }>
      <InputText props={ new InputTextModel('Nombre:', '', null, 'Nombre del cliente', '', 'nombre')} />
      <InputTel props={ new InputTelModel('Teléfono:', '', null, '', 'telefono')} />
      <InputMail props={ new InputMailModel('e-mail:', '', '', 'e-mail del cliente', '', 'e-mail')} />
      <TextArea props={ new TextAreaModel('Observaciones:', '', '', 'Observaciones sobre el cliente', '', 'observaciones') } />
      <InputSubmit texto='Guardar' estilos='' />
    </form>
  );
}

export default DatosCliente;
