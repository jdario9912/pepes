import React,{
  useContext
} from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css';
import { AppContext } from '../../app';

const FormLogin = () => {
  const { setUsuarioLogeado } = useContext(AppContext);
  const logIn = (e) => {
    const 
      usuario = document.querySelector('[type="text"]'),
      pass = document.querySelector('[type="password"]');
    ;
    e.preventDefault();

    if (usuario.value === 'Pepo' && pass.value === 'admin') {
      setUsuarioLogeado(true);
    } else{
      usuario.value = '';
      pass.value = '';
    }
    
  }

  return (
    <form action="" className='form-login' onSubmit={ logIn }>
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
