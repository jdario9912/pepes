import React, { useContext } from "react";
import { EmpleadosContext } from "../empleados";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";

const Tabla = ({ empleados }) => {
  const {
    setId,
    setActualiza,
    handleDelete,
    setNickname,
    setEmail,
    setPassword,
  } = useContext(EmpleadosContext);
  return (
    <table className="tabla-empleados--panel-admin">
      <tbody>
        {empleados ? (
          empleados
            .filter((i) => i.permisions !== "admin")
            .map(({ id, nickname, email, password }) => (
              <tr key={id} className="tr--panel-admin">
                <td className="td-nickname">{nickname}</td>
                <td className="td-buttons">
                  <button
                    onClick={() => {
                      setId(id);
                      setNickname(nickname);
                      setEmail(email);
                      setPassword(password);
                      setActualiza(true);
                    }}
                    className="btn-editar--panel-admin"
                  >
                    <AiFillEdit />
                  </button>

                  <button
                    onClick={handleDelete}
                    id={id}
                    className="btn-eliminar--panel-admin"
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))
        ) : (
          <tr>
            <td>cargando empleados</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tabla;
