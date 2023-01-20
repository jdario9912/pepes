import React,{
  useContext,
  useEffect
} from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css';
import { AppContext } from '../../app';

const FormLogin = () => {
  const { setUsuarioLogeado, setUsuario } = useContext(AppContext);

  useEffect(() => {
    const inputUsuario = document.querySelector('[data="usuario"]');
    inputUsuario.focus();
  }, []);
  
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
      setUsuario(localStorage.getItem('usuario-actual'));
    } else{
      usuario.value = '';
      pass.value = '';
      usuario.focus();
    }
    
  }

  return (
    <form action="" className='form-login' onSubmit={ logIn }>
      <InputText 
        texto='Usuario:' 
        placeholder='Ingresa tu usuario'
        estilosInput='input'
        estilosLabel='label'
        data='usuario'
      />
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
