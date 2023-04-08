import { useEffect, useState } from "react";
import { urlApi } from "../../services/url/url-api";
import "../../styles/desviar-orden-comp.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { desviarOrden } from "../../services/panel-admin/desviar-orden";

const DesviarOrdenComp = () => {
  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);
  const [idCliente, setIdCliente] = useState(null);
  const { nroOrden, tipoTrabajo } = useParams();
  const [filtro, setFiltro] = useState("");
  const regexp = new RegExp(filtro, 'gmi');

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

    if (!idCliente) return;

    desviarOrden(urlApi + `/api/desviar-orden/${nroOrden}`, body)
      .then((res) => res.json())
      .then(({ desviado }) => {
        if(desviado) navigate('/panel-admin');
      })
      .catch((e) => console.log(e));
  };

  const handleFiltro = (e) => {
    setFiltro(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="modulo desviar-orden--form">
        <div className="desviar-orden--inputs">
          <div className="desviar-orden--buttons-container">
            <button type="submit" className="button-desviar">
              desviar
            </button>
            <Link to="/panel-admin" className="button-cancelar">
              Cancelar
            </Link>
          </div>
          <input
            type="text"
            data="filtro"
            className="input"
            placeholder="Filtrar clientes"
            onChange={handleFiltro}
          />
        </div>

        <section className="modulo desviar-orden--section">
          {clientes
            .filter((cliente) => regexp.test(cliente.nombre))
            .map(({ id, nombre, telefono }) => (
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
        </section>
      </form>
    </div>
  );
};

export default DesviarOrdenComp;
