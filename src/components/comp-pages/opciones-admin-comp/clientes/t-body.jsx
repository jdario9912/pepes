import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";

const TBody = ({ clientes, mensaje }) => {
  return (
    <tbody>
      {clientes.map(({ id, nombre, telefono }) => (
        <tr key={id} className="tr--panel-admin">
          <td>{nombre}</td>
          <td>{telefono}</td>
          <td className="td-buttons">
            <Link
              to={`/ordenes-cliente/${id}/${nombre}`}
              className="btn-editar--panel-admin"
            >
              <BsCardChecklist />
            </Link>

            <Link
              to={`/editar-cliente/${id}`}
              className="btn-editar--panel-admin"
            >
              <AiFillEdit />
            </Link>

            <Link
              to={`/eliminar-cliente/${id}/${nombre}`}
              className="btn-eliminar--panel-admin"
            >
              <RiDeleteBinLine />
            </Link>
            <span>{mensaje}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TBody;
