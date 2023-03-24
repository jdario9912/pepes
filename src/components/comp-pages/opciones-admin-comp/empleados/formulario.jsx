import React, {useContext} from 'react';
import { EmpleadosContext } from '../empleados';
import { AiOutlineUpload } from "react-icons/ai";

const Formulario = () => {
  const {handleSubmit, handleChange, id, nickname, setNickname, email, setEmail, password, setPassword} = useContext(EmpleadosContext);
  return (
    <form 
      onSubmit={handleSubmit} 
      data='form-crear-empleado' 
      onChange={handleChange}
      className='formulario'
    >
      <input 
        type="text" 
        hidden 
        value={id} 
        data='id'
        className='input'
      />

      <input
        type="text"
        placeholder="nickname"
        data="nickname"
        value={nickname}
        className='input'
        onChange={(e) => setNickname(e.value)}
      />

      <input 
        type="email" 
        placeholder="email" 
        data="email" 
        value={email} 
        className='input'
        onChange={(e) => setEmail(e.value)}
      />

      <input
        type="text"
        placeholder="contraseña"
        data="password"
        value={password}
        className='input'
        onChange={(e) => setPassword(e.value)}
      />

      <button 
        type="submit" 
        data='btn-submit'
        className='btn-submit-admin-panel'
      ><AiOutlineUpload /></button>
    </form>
  );
}

export default Formulario;
