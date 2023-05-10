import { useEffect, createContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { urlApi } from "../../services/url/url-api";
import Tabla from "./ordenes-cliente-comp/tabla";
import "../../styles/ordenes-cliente-comp.css";
import { BiArrowBack } from "react-icons/bi";

export const OrdenesClienteCompContext = createContext();

const OrdenesClienteComp = () => {
  const { id, nombre } = useParams();
  const [ordenes, setOrdenes] = useState(null);
  const [reset, setReset] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(urlApi + `/api/ordenes-cliente/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrdenes(data);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setOrdenes(ordenes);
    fetch(urlApi + `/api/ordenes-cliente/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setOrdenes(data);
      })
      .catch((e) => console.log(e));
  }, [ordenes, reset]);

  return (
    <OrdenesClienteCompContext.Provider value={{ ordenes, reset, setReset }}>
      {
        <div className="modulo ordenes-cliente-comp--container">
          <div className="ordenes-cliente--container1">
            <button
              onClick={() => navigate(-1)}
              className="ordenes-cliente--atras"
            >
              <BiArrowBack />
            </button>
            Pedidos de {nombre}
          </div>
          <Tabla />
        </div>
      }
    </OrdenesClienteCompContext.Provider>
  );
};

export default OrdenesClienteComp;
