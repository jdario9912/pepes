import React from 'react';
import BtnSubmit from '../btn-submit';
import InputText from '../input-text';
import { InputTextModel } from '../../models/input-text-model';
import '../../styles/buscar-clientes.css';
import { AiOutlineSearch } from "react-icons/ai";
import { urlApi } from '../../services/url/url-api';

const BuscarClientes = () => {
  // const { setClientes } = useContext(ClientesCompContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputCliente = document.querySelector('[data="cliente"]');
    const nombre = inputCliente.value;
    
    fetch(`${urlApi}/api/clientes?nombre=${nombre}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
    ;
  }
  
  return (
    <form onSubmit={ handleSubmit } className='buscar-clientes--form'>
      <InputText props={ new InputTextModel(null, 'buscar-clientes--label-input', null, 'Buscar cliente', 'buscar-clientes--input', 'cliente')} />
      <BtnSubmit texto={ <AiOutlineSearch /> } estilos='buscar-clientes--btn-submit' />
    </form>
  );
}

export default BuscarClientes;