import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { eliminarCliente } from "../../services/panel-admin/eliminar-cliente";
import { urlApi } from "../../services/url/url-api";
import "../../styles/eliminar-cliente-comp.css";
import { AiFillWarning } from "react-icons/ai";

const EliminarClienteComp = () => {
  const navigate = useNavigate();
  const { id, nombre } = useParams();
  const [mensajeS, setMensajeS] = useState(null);

  const handleEliminar = (e) => {
    e.target.setAttribute('disabled', true);

    eliminarCliente(urlApi + `/api/clientes/${id}`)
      .then((res) => res.json())
      .then(({ eliminado, mensaje }) => {
        if (eliminado) {
          navigate("/panel-admin");
          e.target.removeAttribute('disabled');
        }
        else setMensajeS(mensaje);
      });
  };

  return (
    <div className="eliminar-cliente--container-comp">
      <div className="eliminar-cliente--container">
        <span className="eliminar-cliente--icon">
          <AiFillWarning />
        </span>
        <p>
          Seguro que quieres eliminar a{" "}
          <span className="span-nombre">{nombre}</span>?
        </p>
        <p>Se borrarán todos sus pedidos...</p>
        <div className="buttons-container">
          <button onClick={handleEliminar} className='button-confirmar'>confirmar</button>
          <Link to="/panel-admin" className="button-cancelar">Cancelar</Link>
        </div>
        <span>{mensajeS}</span>
      </div>
    </div>
  );
};

export default EliminarClienteComp;
