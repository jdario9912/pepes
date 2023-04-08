import { useEffect, useState } from "react";
import { urlApi } from "../../../services/url/url-api";
import Icono from "./ordenes/icono";
import TBody from "./ordenes/t-body";
import THead from "./ordenes/t-head";

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetch(urlApi + "/api/ordenes-todas")
      .then((res) => res.json())
      .then((d) => {
        setOrdenes(d);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setOrdenes(ordenes);
  }, [ordenes]);

  const handleFiltro = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div className="modulo admin--container">
      <div className="icono-filtro--container">
        <Icono />
        <input
          type="text"
          className="input input-filtro"
          placeholder="Filtrar ordenes"
          onChange={handleFiltro}
        />
      </div>
      <table>
        <THead />
        <TBody ordenes={ordenes} filtro={filtro} />
      </table>
    </div>
  );
};

export default Ordenes;
