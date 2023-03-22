import React, {useEffect, useState, createContext} from 'react';
import { crearEmpleado } from '../../../services/panel-admin/crear-empleado';
import {urlApi} from '../../../services/url/url-api';
import { editarEmpleado } from '../../../services/panel-admin/editar-empleado';
import { eliminarEmpleado } from '../../../services/panel-admin/eliminar-empleado';
import Formulario from './empleados/formulario';
import Tabla from './empleados/tabla';
import Icono from './empleados/icono';
import TituloForm from './empleados/titulo-form';
import '../../../styles/clientes-admin-panel.css';

export const EmpleadosContext = createContext();

const Empleados = () => {
  const [empleados, setEmpleados] = useState (null);
  const [recargarPagina, setRecargarPagina] = useState(false);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [id, setId] = useState(null);
  const [mensajeS, setMensajeS] = useState(null);
  const [actualiza, setActualiza] = useState(false);

  useEffect (() => {
    fetch (urlApi + '/api/empleados')
      .then (res => res.json ())
      .then (data => {
        setEmpleados (data);
      })
      .catch (e => console.log (e));
  }, []);

  useEffect (
    () => {
      setEmpleados (empleados);
    },
    [empleados]
  );

  useEffect(() => {
    fetch (urlApi + '/api/empleados')
      .then (res => res.json ())
      .then (data => {
        setEmpleados (data);
      })
      .catch (e => console.log (e))
    ;
    setRecargarPagina(false);
  }, [recargarPagina]);

  const handleSubmit = e => {
    e.preventDefault ();

    const form = document.querySelector('[data="form-crear-empleado"]');
    const nickname = document.querySelector('[data="nickname"]').value;
    const email = document.querySelector('[data="email"]').value;
    const password = document.querySelector('[data="password"]').value;
    const id = document.querySelector('[data="id"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    btnSubmit.setAttribute('disabled', true);

    const body = {
      nickname, 
      email, 
      password
    };

    if (actualiza) {
      editarEmpleado(urlApi + `/api/empleados/${id}`, body)
        .then(res => res.json())
        .then(({actualizado, mensaje}) => {
          if(!actualizado) {
            setMensajeS(mensaje);
          } else {
            setRecargarPagina(true);
            setActualiza(false);
            setId('');
            setNickname('');
            setEmail('');
            setPassword('');
          }
          btnSubmit.removeAttribute('disabled');
        })
        .catch(e => console.log(e))
      ;
    } else {
      crearEmpleado(urlApi + `/api/empleados`, body)
        .then(res => res.json())
        .then(({creado, mensaje}) => {
          if (!creado) return setMensajeS(mensaje);
          btnSubmit.removeAttribute('disabled');
          form.reset();
          setRecargarPagina(true);
        })
        .catch(e => console.log(e))
      ;
    }
  };

  const handleChange = () => {
    const btnSubmit = document.querySelector('[data="btn-submit"]');
    setMensajeS(null);
    btnSubmit.removeAttribute('disabled');
  };

  const handleDelete = (e) => {
    const btnEliminar = e.target;
    const id = e.target.id;

    btnEliminar.setAttribute('disabled', true);

    eliminarEmpleado(urlApi + `/api/empleados/${id}`)
      .then(res => res.json())
      .then(({eliminado, mensaje}) => {
        if(!eliminado) return setMensajeS(mensaje);
        setRecargarPagina(true);
        btnEliminar.removeAttribute('disabled');
      })
      .catch(e => console.log(e))
    ;
  };

  return (
    <EmpleadosContext.Provider value={{
      handleSubmit, 
      handleChange,
      handleDelete,
      setId, 
      setNickname, 
      setEmail, 
      setPassword,
      setActualiza,
      id,
      nickname,
      email,
      password
    }}>
      <div className='modulo clientes--container'>
        <Icono />
        <TituloForm actualiza={actualiza} />
        <Formulario />
        <span>{mensajeS}</span>
        <Tabla empleados={empleados} />
      </div>
    </EmpleadosContext.Provider>
  );
};

export default Empleados;
