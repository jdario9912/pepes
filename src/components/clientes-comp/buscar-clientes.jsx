import React from 'react';
import BtnSubmit from '../btn-submit';
import InputText from '../input-text';

const BuscarClientes = () => {
  return (
    <form>
      <InputText texto='Nombre' />
      <BtnSubmit texto='Buscar' />
    </form>
  );
}

export default BuscarClientes;
