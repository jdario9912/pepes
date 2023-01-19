import React from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css'

const FormLogin = () => {
  return (
    <form action="" className='form-login'>
      <InputText texto='Usuario' placeholder='Ingresa tu usuario' />
      <InputPassword texto='Contraseña' placeholder='Ingresa tu contraseña' />
      <InputSubmit texto='Entrar' />
    </form>
  );
}

export default FormLogin;
