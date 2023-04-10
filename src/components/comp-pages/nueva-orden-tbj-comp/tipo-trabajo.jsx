import { useContext } from "react";
import "../../../styles/tipo-trabajo.css";
import { NuevaOrdenTbjCompContext } from "../nueva-orden-tbj-comp";
import { btnsTipoTrabajo } from "../../../services/btns-tipo-trabajo/btns-tipo-trabajo";

const TipoTrabajo = ({ accion }) => {
  const { setVerBotonesTipoTrabajo } = useContext(NuevaOrdenTbjCompContext);

  const handleTipoTrabajo = (e) => {
    accion(e.target.id);
    setVerBotonesTipoTrabajo(false);
  };

  return (
    <div className="tipo-trabajo--botones-container modulo">
      {btnsTipoTrabajo.map(({ id, icon, texto }) => (
        <button
          onClick={handleTipoTrabajo}
          id={id}
          className="tipo-trabajo--boton"
        >
          {icon}
          {texto}
        </button>
      ))}
    </div>
  );
};

export default TipoTrabajo;
