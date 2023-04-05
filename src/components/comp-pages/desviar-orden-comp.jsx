import { useEffect, useState } from "react";
import { urlApi } from "../../services/url/url-api";
import "../../styles/desviar-orden-comp.css";
import { useParams } from "react-router-dom";
import { desviarOrden } from "../../services/panel-admin/desviar-orden";

const DesviarOrdenComp = () => {
  const [clientes, setClientes] = useState([]);
  const [idCliente, setIdCliente] = useState(null);
  const { nroOrden, tipoTrabajo } = useParams();

  useEffect(() => {
    fetch(urlApi + `/api/clientes`)
      .then((res) => res.json())
      .then((d) => {
        setClientes(d);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setClientes(clientes);
  }, [clientes]);

  const handleClick = (e) => {
    setIdCliente(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tabla = tipoTrabajo === "diseños" ? "disenos" : tipoTrabajo;
    const body = { idCliente, tabla };

    desviarOrden(urlApi + `/api/desviar-orden/${nroOrden}`, body)
      .then((res) => res.json())
      .then(({ desviado, mensaje }) => {
        console.log(desviado, mensaje);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">desviar</button>
        <input type="text" name="" id="" />

        {clientes.map(({ id, nombre, telefono }) => (
          <div key={id}>
            <input type="radio" name="cliente" id={id} hidden value={id} />
            <label
              htmlFor={id}
              className="desviar-orden-grid"
              onClick={handleClick}
              id={id}
            >
              <span id={id}>{nombre}</span> <span id={id}>{telefono}</span>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default DesviarOrdenComp;
