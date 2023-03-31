import { useEffect, useState } from "react";
import { urlApi } from "../../../services/url/url-api";
import TBody from "./clientes/t-body";
import THead from "./clientes/t-head";
import Icono from "./clientes/icono";
import '../../../styles/admin-panel.css';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [reset, setReset] = useState(false);

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

  return (
    <div className="modulo admin--container">
      <Icono />
      <table>
        <THead />
        <TBody clientes={clientes} />
      </table>
    </div>
  );
};

export default Clientes;
