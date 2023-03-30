import { useState, useEffect, createContext } from "react";
import { FiTruck } from "react-icons/fi";
import { urlApi } from "../../services/url/url-api";
import MostrarEnviadosProv from "./ordenes-enviados-prov-comp/mostrar-enviados-prov";

export const OrdenesEnviadosProvCompContext = createContext();

const OrdenesEnviadosProvComp = () => {
  const [enviadosAProveedor, setEnviadosAProveedor] = useState(null);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    fetch(urlApi + "/api/ordenes-proveedor")
      .then((res) => res.json())
      .then((d) => {
        setEnviadosAProveedor(d);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setEnviadosAProveedor(enviadosAProveedor);
  }, [enviadosAProveedor]);

  return (
    <OrdenesEnviadosProvCompContext.Provider value={{ setReset }}>
      <div className="modulo ordenes-pendientes-comp--container">
        <div className="ordenes-pendientes-comp--titulo">
          <span className="ordenes-pendientes-comp--icon">
            <FiTruck />
          </span>
          Enviados a proveedor
        </div>
        {!enviadosAProveedor ? (
          <div>Cargando...</div>
        ) : enviadosAProveedor.length === 0 ? (
          <div>No hay ordenes enviadas a proveedor</div>
        ) : (
          <MostrarEnviadosProv enviadosAProveedor={enviadosAProveedor} />
        )}
      </div>
    </OrdenesEnviadosProvCompContext.Provider>
  );
};

export default OrdenesEnviadosProvComp;
