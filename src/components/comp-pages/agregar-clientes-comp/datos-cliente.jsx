import React from 'react';
import InputMail from '../../input-mail';
import InputTel from '../../input-tel';
import InputText from '../../input-text';
import TextArea from '../../text-area';

const DatosCliente = () => {
  return (
    <div>
      <InputText texto='Nombre: ' />
      <InputTel texto='Teléfono: ' />
      <InputMail texto='e-mail: ' />
      <TextArea texto='Observaciones: ' />
    </div>
  );
}

export default DatosCliente;
