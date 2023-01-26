import React,{
  useContext,
} from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css';
import { AppContext } from '../../app';
import { InputTextModel } from '../../../models/input-text-model';
import { InputPasswordModel } from '../../../models/input-password-model';

const FormLogin = () => {
  const { setUsuarioLogeado, setUsuarioActual } = useContext(AppContext);
  
  const logIn = (e) => {
    const 
      usuario = document.querySelector('[data="usuario"]'),
      pass = document.querySelector('[data="password"]')
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
  // input-password--label
  return (
    <form action="" className='form-login' onSubmit={ logIn }>
      <InputText props={ new InputTextModel('Usuario:', 'form-login--label-usuario', null, 'Ingresa tu usuario', 'form-login--input-usuario', 'usuario')} />
      <InputPassword props={ new InputPasswordModel('Contraseña:', 'form-login--label-pass', 'form-login--input-pass', 'Ingresa contraseña', 'password') } />
      <InputSubmit texto='Entrar' estilos='form-login-btn-submit' />
    </form>
  );
}

export default FormLogin;
