import React,{
  useContext,
} from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css';
import { AppContext } from '../../app';
import { InputTextModel } from '../../../models/input-text-model';

const FormLogin = () => {
  const { setUsuarioLogeado, setUsuarioActual } = useContext(AppContext);
  
  const logIn = (e) => {
    const 
      usuario = document.querySelector('[data="usuario"]'),
      pass = document.querySelector('[data="password"]');
    ;
    e.preventDefault();

    if (usuario.value === 'Pepo' && pass.value === 'admin') {
      localStorage.setItem('usuario-logeado', true);
      localStorage.setItem('usuario-actual', usuario.value);
      setUsuarioLogeado(JSON.parse(localStorage.getItem('usuario-logeado')));
      setUsuarioActual(localStorage.getItem('usuario-actual'));
    } else{
      usuario.value = '';
      pass.value = '';
      usuario.focus();
    }
  }

  return (
    <form action="" className='form-login' onSubmit={ logIn }>
      <InputText props={ new InputTextModel('Usuario:', 'label', null, 'Ingresa tu usuario', 'input', 'usuario')} />
      <InputPassword 
        texto='Contraseña:' 
        placeholder='Ingresa tu contraseña' 
        estilosInput='input' 
        estilosLabel='label'
        data='password'
      />
      <InputSubmit texto='Entrar' estilos='form-login-btn-submit' />
    </form>
  );
}

export default FormLogin;
