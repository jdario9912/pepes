import React from 'react';
import InputMail from '../../input-mail';
import InputTel from '../../input-tel';
import InputText from '../../input-text';
import TextArea from '../../text-area';
import { InputTextModel } from '../../../models/input-text-model';
import InputSubmit from '../../input-submit';
import { InputTelModel } from '../../../models/input-tel-model';

const DatosCliente = () => {
  
  return (
    <form>
      <InputText props={ new InputTextModel('Nombre:', '', null, 'Nombre del cliente', '', 'nombre')} />
      <InputTel props={ new InputTelModel('Teléfono:', '', null, '', 'telefono')} />
      <InputMail texto='e-mail: ' />
      <TextArea texto='Observaciones: ' />
      <InputSubmit texto='Guardar' estilos='' />
    </form>
  );
}

export default DatosCliente;
