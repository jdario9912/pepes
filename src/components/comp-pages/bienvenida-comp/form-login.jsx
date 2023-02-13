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
import { TbUserCircle } from "react-icons/tb";
import { CgKeyhole } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
  const { setUsuarioLogeado } = useContext(AppContext);
  const [errorLogin, setErrorLogin] = useState(false);
  const [camposVacios, setCamposVacios] = useState(false);
  const [mensajeServidor, setMensajeServidor] = useState('');
  const navigate = useNavigate();
  
  const onSubmit = async (e) => {
    e.preventDefault();
    const inputNickname = (document.querySelector('[data="usuario"]'));
    const inputPassword = (document.querySelector('[data="password"]'));
    const nickname = inputNickname.value;
    const password = inputPassword.value;
    
    if(nickname.length > 0 && password.length > 0){
      setCamposVacios(false);
      await solicitudLogin(urlApi + '/api/login', nickname, password)
        .then(res => res.json())      
        .then(({ mensaje, auth, permisions }) => {
          if(auth){
            setErrorLogin(false);
            setUsuarioLogeado(auth);
            setSessionLocal(auth, nickname, permisions);
            if(auth) resetInputs(inputNickname, inputPassword);
            navigate('/ordenes-pendientes');
          } else {
            setErrorLogin(true);
            setMensajeServidor(mensaje);
          }
        })
        .catch(e => console.log(e))
      ;
    } else {
      setCamposVacios(true);
      setMensajeServidor('');
    }
  };

  return (
    <form className='form-login' onSubmit={ onSubmit }>
      <div className='form-login--container-label-input'>
        <TbUserCircle className='form-login--icons' />
        <InputText props={ 
          new InputTextModel(
            <IoIosArrowRoundForward className='form-login--icons icon-arrow' />, 
            'form-login--label-inputUsuario', 
            '', 
            'Ingresa tu usuario', 
            'form-login--input-usuario', 
            'usuario'
          )
        } />
      </div>
      <div className='form-login--container-label-input'>
        <CgKeyhole className='form-login--icons' />
        <InputPassword props={ 
          new InputPasswordModel(
            <IoIosArrowRoundForward className='form-login--icons icon-arrow' />, 
            'form-login--label-inputPass', 
            'form-login--input-pass', 
            'Ingresa contraseña', 
            'password'
          ) 
        } />
      </div>
      { errorLogin ? <span className='form-login--msj-error'>{ mensajeServidor}</span> : null }
      { camposVacios ? <span className='form-login--msj-error'>Falta usuario o contraseña.</span> : null }
      <InputSubmit 
        texto='Ingresar' 
        estilos={ errorLogin ? 'form-login--btn-submit-error-login' : 'form-login-btn-submit' }
      />
    </form>
  );
}

export default FormLogin;
