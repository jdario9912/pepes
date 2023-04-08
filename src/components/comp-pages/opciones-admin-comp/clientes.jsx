import { useEffect, useState } from "react";
import { urlApi } from "../../../services/url/url-api";
import TBody from "./clientes/t-body";
import THead from "./clientes/t-head";
import Icono from "./clientes/icono";
import "../../../styles/admin-panel.css";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [reset, setReset] = useState(false);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    fetch(urlApi + "/api/clientes")
      .then((res) => res.json())
      .then((d) => {
        setClientes(d);
      })
      .catch((e) => console.log(e));
    setReset(false);
  }, [reset]);

  useEffect(() => {
    fetch(urlApi + "/api/clientes")
      .then((res) => res.json())
      .then((d) => {
        setClientes(d);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setClientes(clientes);
  }, [clientes]);

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
          placeholder="Filtrar clientes"
          onChange={handleFiltro}
        />
      </div>
      <table>
        <THead />
        <TBody clientes={clientes} filtro={filtro} />
      </table>
    </div>
  );
};

export default Clientes;
