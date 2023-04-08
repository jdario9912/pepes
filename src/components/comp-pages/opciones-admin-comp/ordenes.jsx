import { useEffect, useState } from "react";
import { urlApi } from "../../../services/url/url-api";
import Icono from "./ordenes/icono";
import TBody from "./ordenes/t-body";
import THead from "./ordenes/t-head";

const Ordenes = () => {
  const [ordenes, setOrdenes] = useState([]);

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

  return (
    <div className="modulo admin--container">
      <Icono />
      <table>
        <THead />
        <TBody ordenes={ordenes} />
      </table>
    </div>
  );
};

export default Ordenes;
