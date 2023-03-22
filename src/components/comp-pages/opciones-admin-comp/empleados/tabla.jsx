import React, {useContext} from 'react';
import { EmpleadosContext } from '../empleados';

const Tabla = ({empleados}) => {
  const {setId, setActualiza, handleDelete, setNickname, setEmail, setPassword} = useContext(EmpleadosContext);
  return (
    <table>
      <thead>
        <tr>
          <th>Nickname</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados
          ? empleados.filter(i => i.nickname !== 'pepo').map(({id, nickname, email, password}) => (
              <tr key={id}>
                <td>{nickname}</td>
                <td>
                  <button onClick={() => {
                    setId(id); 
                    setNickname(nickname); 
                    setEmail(email); 
                    setPassword(password);
                    setActualiza(true);
                  }}>editar</button>
                  
                  <button onClick={handleDelete} id={id}>eliminar</button>
                </td>
              </tr>
            ))
          : <tr><td>cargando empleados</td></tr>
        }
      </tbody>
    </table>
  );
}

export default Tabla;
