import React, {
  useContext
} from 'react';
import BtnSubmit from '../../btn-submit';
import InputText from '../../input-text';
import { InputTextModel } from '../../../models/input-text-model';
import '../../../styles/buscar-clientes.css';
import { AiOutlineSearch } from "react-icons/ai";
import { ClientesCompContext } from '../clientes-comp';

const BuscarClientes = () => {
  const { setMostrarListaClientes } = useContext(ClientesCompContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCliente = document.querySelector('[data="cliente"]');
    inputCliente.value = '';
    setMostrarListaClientes(false);
  }
  return (
    <form onSubmit={ handleSubmit } className='buscar-clientes--form'>
      <InputText props={ new InputTextModel(null, 'buscar-clientes--label-input', null, 'Buscar cliente', 'buscar-clientes--input', 'cliente')} />
      <BtnSubmit texto={ <AiOutlineSearch /> } estilos='buscar-clientes--btn-submit' />
    </form>
  );
}

export default BuscarClientes;
