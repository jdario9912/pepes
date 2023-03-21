import React, {useEffect, useState} from 'react';
import { crearEmpleado } from '../../../services/crear-empleado/crear-empleado';
import {urlApi} from '../../../services/url/url-api';
import { AiOutlineUpload } from "react-icons/ai";

const Empleados = () => {
  const [empleados, setEmpleados] = useState (null);
  const [registro, setRegistro] = useState(false);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [id, setId] = useState(null);

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
    setRegistro(false);
  }, [registro]);

  const handleSubmitCrearEmpleado = e => {
    e.preventDefault ();

    const form = document.querySelector('[data="form-crear-empleado"]');
    const nickname = document.querySelector('[data="nickname"]').value;
    const email = document.querySelector('[data="email"]').value;
    const password = document.querySelector('[data="password"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');

    btnSubmit.setAttribute('disabled', true);

    setTimeout(() => {
      btnSubmit.removeAttribute('disabled');
      form.reset();
    }, 1000);

    const body = {
      nickname, 
      email, 
      password
    };

    crearEmpleado(urlApi + `/api/empleados`, body)
      .then(res => res.json())
      .then(({creado}) => {
        if (creado) {
          btnSubmit.removeAttribute('disabled');
          form.reset();
          setRegistro(true);
        }
      })
      .catch(e => console.log(e))
    ;
  };

  return (
    <div>
      <p>Empleados</p>
      <form onSubmit={handleSubmitCrearEmpleado} data='form-crear-empleado'>
        <input 
          type="text" 
          hidden 
          value={id} 
        />
        <input
          type="text"
          placeholder="nickname"
          data="nickname"
          value={nickname}
          onChange={(e) => setNickname(e.value)}
        />

        <input 
          type="email" 
          placeholder="email" 
          data="email" 
          value={email} 
          onChange={(e) => setEmail(e.value)}
        />

        <input
          type="text"
          placeholder="contraseña"
          data="password"
          value={password}
          onChange={(e) => setPassword(e.value)}
        />

        <button type="submit" data='btn-submit'><AiOutlineUpload /></button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados
            ? empleados.map (({id, nickname, email, password}) => (
                <tr key={id}>
                  <td>{nickname}</td>
                  <td>
                    <button onClick={() => {
                      setId(id); 
                      setNickname(nickname); 
                      setEmail(email); 
                      setPassword(password)
                    }}>editar</button>
                    
                    eliminar
                  </td>
                </tr>
              ))
            : <span>cargando empleados</span>}
        </tbody>
      </table>
    </div>
  );
};

export default Empleados;
