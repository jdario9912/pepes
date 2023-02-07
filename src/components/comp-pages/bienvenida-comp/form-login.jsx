import React,{
  useContext,
  useState
} from 'react';
import InputPassword from '../../input-password';
import InputSubmit from '../../input-submit';
import InputText from '../../input-text';
import '../../../styles/form-login.css';
import { AppContext } from '../../app';
import { InputTextModel } from '../../../models/input-text-model';
import { InputPasswordModel } from '../../../models/input-password-model';
import { solicitudLogin, setSessionLocal, resetInputs } from '../../../services/form-login/form-login';
import { urlApi } from '../../../services/url/url-api';

const FormLogin = () => {
  const { setUsuarioLogeado, setUsuarioActual } = useContext(AppContext);
  const [errorLogin, setErrorLogin] = useState(false);
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const inputNickname = (document.querySelector('[data="usuario"]'));
    const inputPassword = (document.querySelector('[data="password"]'));
    const nickname = inputNickname.value;
    const password = inputPassword.value;
    
    if(nickname.length > 0 && password.length > 0){
      await solicitudLogin(urlApi + '/api/login', nickname, password)
        .then(res => res.json())      
        .then(({ auth }) => {
          if(auth){
            setErrorLogin(false);
            setUsuarioLogeado(auth);
            setSessionLocal(auth, nickname);
            setUsuarioActual(localStorage.getItem('usuario-actual'));
            if(auth) resetInputs(inputNickname, inputPassword);
          } else {
            setErrorLogin(true);
          }
        })
        .catch(e => console.log(e))
      ;
    }
  };

  return (
    <form className='form-login' onSubmit={ onSubmit }>
      <InputText props={ new InputTextModel('Usuario:', 'form-login--label-usuario', '', 'Ingresa tu usuario', 'form-login--input-usuario', 'usuario')} />
      <InputPassword props={ new InputPasswordModel('Contraseña:', 'form-login--label-inputPass', 'form-login--input-pass', 'Ingresa contraseña', 'password') } />
      { errorLogin ? <span>Usuario o contraseña incorretos.</span> : null }
      <InputSubmit texto='Ingresar' estilos='form-login-btn-submit' />
    </form>
  );
}

export default FormLogin;
