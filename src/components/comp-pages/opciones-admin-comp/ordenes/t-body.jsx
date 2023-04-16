import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { ImFilePdf } from "react-icons/im";
import { MdAltRoute } from "react-icons/md";

const TBody = ({ ordenes, filtro }) => {
  const regexp = new RegExp(filtro, "gmi");
  
  return (
    <tbody>
      {ordenes
        .filter((orden) => regexp.test(orden.nro_orden))
        .map(({ id, nro_orden, tipo_trabajo, nombre }) => (
          <tr key={nro_orden} className="tr--panel-admin">
            <td>{nro_orden}</td>
            <td>{tipo_trabajo}</td>
            <td>{nombre}</td>
            <td className="td-buttons">
              <Link
                to={`/pdf/${tipo_trabajo}/${nro_orden}`}
                className="btn-editar--panel-admin"
              >
                <ImFilePdf />
                <span className="label-btn">ver</span>
              </Link>

              <Link
                to={`/editar-orden/${tipo_trabajo}/${id}/${nombre}/${nro_orden}`}
                className="btn-editar--panel-admin"
              >
                <AiFillEdit />
                <span className="label-btn">editar</span>
              </Link>

              <Link
                to={`/desviar-orden/${nro_orden}/${tipo_trabajo}`}
                className="btn-editar--panel-admin"
              >
                <MdAltRoute />
                <span className="label-btn">desviar</span>
              </Link>

              <Link
                to={`/eliminar-orden/${nro_orden}/${tipo_trabajo}/${nombre}`}
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
