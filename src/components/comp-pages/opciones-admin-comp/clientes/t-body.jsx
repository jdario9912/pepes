import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";

const TBody = ({ clientes, filtro }) => {
  const regexp = new RegExp(filtro, "gmi");

  return (
    <tbody>
      {clientes
        .filter((cliente) => regexp.test(cliente.nombre))
        .map(({ id, nombre, telefono }) => (
          <tr key={id} className="tr--panel-admin">
            <td className="capitalize">{nombre}</td>
            <td>{telefono}</td>
            <td className="td-buttons">
              <Link
                to={`/ordenes-cliente/${id}/${nombre}`}
                className="btn-editar--panel-admin"
              >
                <BsCardChecklist />
                <span className="label-btn">ver ordenes</span>
              </Link>

              <Link
                to={`/editar-cliente/${id}`}
                className="btn-editar--panel-admin"
              >
                <AiFillEdit />
                <span className="label-btn">editar</span>
              </Link>

              <Link
                to={`/eliminar-cliente/${id}/${nombre}`}
                className="btn-eliminar--panel-admin"
              >
                <RiDeleteBinLine />
                <span className="label-btn">eliminar</span>
              </Link>
            </td>
          </tr>
        ))}
    </tbody>
  );
};

export default TBody;
