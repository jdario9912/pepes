import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { actualizarCliente } from '../../services/form-editar-cliente/form-editar-cliente';
import InputText from './editar-cliente-comp/input-text';
import { urlApi } from '../../services/url/url-api';
import InputTel from './editar-cliente-comp/input-tel';
import InputEmail from './editar-cliente-comp/input-email';
import TextArea from './editar-cliente-comp/text-area';
import '../../styles/editar-cliente-comp.css'

const EditarClienteComp = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const [busqueda, setBusqueda] = useState(false);
  const [mensajeS, setMensajeS] = useState(null);

  useEffect(() => {
    fetch(urlApi + `/api/clientes/${id}`)
      .then(res => res.json())
      .then(({ ok, cliente }) => {
        setCliente(cliente);
        setBusqueda(ok)
      })
      .catch(e => console.log(e))
    ;
  }, []);

  useEffect(() => {
    setCliente(cliente);
  }, [cliente]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = document.querySelector('[data="nombre"]').value;
    const telefono = document.querySelector('[data="telefono"]').value;
    const email = document.querySelector('[data="email"]').value;
    const observaciones = document.querySelector('[data="observaciones"]').value;

    const body = {
      nombre,
      telefono,
      email,
      observaciones,
      id
    };

    await actualizarCliente(urlApi + '/api/clientes', body)
      .then(res => res.json())
      .then(({ actualizado, mensaje }) => {
        if (actualizado) return navigate('/clientes');
        else setMensajeS(mensaje);
      })
      .catch(e => console.log(e))
    ;
  };

  if (busqueda) {
    return (
      <div>
        <form onSubmit={ handleSubmit } className='form puntas-redondas editar-cliente--form'>
        <span className='editar-cliente--titulo'>Editar cliente</span>
          <InputText valor={cliente.nombre} data='nombre' />
          <InputTel valor={cliente.telefono} data='telefono' />
          <InputEmail valor={ cliente.email } data='email' />
          <TextArea valor={cliente.observaciones} data='observaciones' />
          { mensajeS ? <span>{ mensajeS }</span> : null }
          <button type="submit" className='btn-submit'>actualizar</button>
        </form>
      </div>
    );
  } else {
    <div>Cliente no encontrado</div>
  };
}

export default EditarClienteComp;
