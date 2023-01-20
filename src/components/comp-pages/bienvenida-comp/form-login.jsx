import React from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css'

const FormLogin = () => {
  return (
    <form action="" className='form-login'>
      <InputText 
        texto='Usuario:' 
        placeholder='Ingresa tu usuario'
        estilosInput='input'
        estilosLabel=' label'
      />
      <InputPassword 
        texto='Contraseña:' 
        placeholder='Ingresa tu contraseña' 
        estilosInput='input' 
        estilosLabel=' label'
      />
      <InputSubmit texto='Entrar' estilos='form-login-btn-submit' />
    </form>
  );
}

export default FormLogin;
