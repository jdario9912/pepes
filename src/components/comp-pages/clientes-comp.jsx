import React, { createContext, useState } from "react";
import MostrarClientes from "../comp-pages/clientes-comp/mostrar-clientes";
import "../../styles/clientes-comp.css";
import { BsPeople } from "react-icons/bs";

export const ClientesCompContext = createContext();

const ClientesComp = () => {
  const [mostrarListaClientes, setMostrarListaClientes] = useState(true);
  const [clientes, setClientes] = useState([]);
  const [filtro, setFiltro] = useState("");

  const handleFiltro =  (e) => {
    setFiltro(e.target.value);
  };

  return (
    <ClientesCompContext.Provider
      value={{
        mostrarListaClientes,
        setMostrarListaClientes,
        clientes,
        setClientes,
        filtro
      }}
    >
      <div className="clientes-comp--container modulo">
        <div>
          <div className="clientes-comp--titulo">
            <span className="clientes-comp--icon">
              <BsPeople />
            </span>
            Clientes
          </div>
          <div>
            <input
              type="text"
              name=""
              id=""
              className="input"
              placeholder="Filtrar clientes"
              onChange={handleFiltro}
            />
          </div>
        </div>
        <MostrarClientes />
      </div>
    </ClientesCompContext.Provider>
  );
};

export default ClientesComp;
