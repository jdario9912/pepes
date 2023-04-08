import { AiFillWarning } from "react-icons/ai";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { urlApi } from "../../services/url/url-api";
import "../../styles/eliminar-orden-comp.css";
import { eliminarOrden } from "../../services/panel-admin/eliminar-orden";
import { useEffect } from "react";

const EliminarOrdenComp = () => {
  const navigate = useNavigate();
  const { nroOrden, tipoTrabajo, nombre } = useParams();
  const [mensajeS, setMensajeS] = useState(null);
  const tipo_trabajo = tipoTrabajo === "diseños" ? "disenos" : tipoTrabajo;

  const handleEliminar = (e) => {

    e.target.setAttribute('disabled', true);

    eliminarOrden(urlApi + `/api/eliminar-orden/${tipo_trabajo}/${nroOrden}`)
      .then(res => res.json())
      .then(({eliminado, mensaje}) => {
        if(eliminado) return navigate('/panel-admin');
        
        setMensajeS(mensaje);
        e.target.removeAttribute('disabled');
      })
      .catch(e => console.log(e));
  };

  useEffect(() => {
    setMensajeS(mensajeS);
  }, [mensajeS]);

  return (
    <div className="eliminar-orden--container-comp">
      <div className="eliminar-orden--container">
        <span className="eliminar-orden--icon">
          <AiFillWarning />
        </span>
        <p>
          Seguro que quieres eliminar la orden n°{" "}
          <span className="span-amarillo">{nroOrden}</span> de{" "}
          <span className="span-amarillo">{nombre}</span>?
        </p>
        <p>
          Quizás quieras asignarla a otro cliente haciendo click{" "}
          <Link to={`/desviar-orden/${nroOrden}/${tipo_trabajo}`} className="link-amarillo">
            aquí
          </Link>
          , o...
        </p>

        <div className="buttons-container">
          <button onClick={handleEliminar} className="button-confirmar">
            confirmar
          </button>
          <Link to="/panel-admin" className="button-cancelar">
            Cancelar
          </Link>
        </div>
        <span>{mensajeS}</span>
      </div>
    </div>
  );
};

export default EliminarOrdenComp;
