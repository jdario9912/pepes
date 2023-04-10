import React, { useReducer } from "react";
import { opcionesPanelAdmin } from "../../models/opciones-panel-admin";
import "../../styles/opciones-admin-comp.css";
import { opcionesAdmin } from "../../services/redux/opciones-admin";
import { AiOutlineSetting } from "react-icons/ai";
import { btnsOpcionesAdmin } from "../../models/btns-opciones-admin";

const administrarInicial = "";

const OpcionesAdmin = () => {
  const [administrar, dispatch] = useReducer(opcionesAdmin, administrarInicial);

  const handleClick = (e) => dispatch({ type: e.target.id });

  return (
    <div className="opciones-admin--container">
      <h2 className="opciones-admin--titulo">
        <span>
          <AiOutlineSetting />
        </span>
        Panel administrador
      </h2>
      <div className="opciones-admin--botones-container modulo">
        {btnsOpcionesAdmin.map(({ dispatch, icon, label }) => (
          <button
            key={label}
            id={dispatch}
            className="opciones-admin--boton"
            onClick={handleClick}
          >
            <div className="icon-texto-container" id={dispatch}>
              {icon}
              {label}
            </div>
          </button>
        ))}
      </div>
      {opcionesPanelAdmin[administrar]}
    </div>
  );
};

export default OpcionesAdmin;
