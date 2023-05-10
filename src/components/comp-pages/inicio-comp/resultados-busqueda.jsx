import React, { useEffect, useState, createContext } from "react";
import { urlApi } from "../../../services/url/url-api";
import TablaClientes from "./resultados-busqueda/tabla-clientes/tabla-clientes";
import TablaOrden from "./resultados-busqueda/tabla-orden/tabla-orden";
export const TablaOrdenContext = createContext();
export const TablaClientesContext = createContext();

const ResultadosBusqueda = ({ dato }) => {
  const [numerico, setNumerico] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [orden, setOrden] = useState({});
  const [alerta, setAlerta] = useState("");

  useEffect(() => {
    fetch(urlApi + `/api/busqueda/${dato}`)
      .then((res) => res.json())
      .then(({ numero, resultados, mensaje }) => {
        if (mensaje !== "" && mensaje) setAlerta(mensaje);
        setNumerico(numero);
        numero ? setOrden(resultados) : setClientes(resultados);
      })
      .catch((e) => console.log(e));
  }, []);

  if (alerta !== "") return <p>{alerta}</p>;

  if (numerico) {
    return (
      <TablaOrdenContext.Provider value={{ orden }}>
        {Object.keys(orden).length > 0 ? (
          <TablaOrden />
        ) : (
          <p>Cargando resultado...</p>
        )}
      </TablaOrdenContext.Provider>
    );
  } else {
    return (
      <TablaClientesContext.Provider value={{ clientes, dato }}>
        {clientes.length > 0 ? (
          <TablaClientes />
        ) : (
          <p>Cargando resultados...</p>
        )}
      </TablaClientesContext.Provider>
    );
  }
};

export default ResultadosBusqueda;
