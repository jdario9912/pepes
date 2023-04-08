import React, { useContext, useEffect, createContext } from "react";
import "../../../styles/mostrar-clientes.css";
import { ClientesCompContext } from "../clientes-comp";
import { urlApi } from "../../../services/url/url-api";
import Tabla from "./mostrar-clientes/tabla";
export const MostrarClientesContext = createContext();

const MostrarClientes = () => {
  const { setClientes, clientes } = useContext(ClientesCompContext);

  useEffect(() => {
    fetch(urlApi + "/api/clientes")
      .then((res) => res.json())
      .then((data) => setClientes(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mostrar-clientes--table-container">
      {clientes.length > 0 ? <Tabla /> : <p>Cargando clientes...</p>}
    </div>
  );
};

export default MostrarClientes;
