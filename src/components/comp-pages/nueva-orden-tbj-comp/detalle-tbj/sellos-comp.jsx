import { useContext, useState } from "react";
import InputText from "../../../input-text";
import { InputTextModel } from "../../../../models/input-text-model";
import Tipo from "./sellos-comp/tipo";
import Muestra from "../muestra";
import TextArea from "../../../text-area";
import { TextAreaModel } from "../../../../models/text-area-model";
import DetallePago from "../detalle-pago";
import { NuevaOrdenTbjCompContext } from "../../nueva-orden-tbj-comp";
import {
  atendido_por,
  fecha_creacion,
  nro_orden,
} from "../../../../services/datos-orden-tbj/datos-orden-tbj";
import { urlApi } from "../../../../services/url/url-api";
import { crearOrden } from "../../../../services/form-nueva-orden/crear-orden";
import { useNavigate } from "react-router-dom";
import { TfiStamp } from "react-icons/tfi";
import FechaHora from "../fecha-hora";

const SellosComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({
    registro: false,
    mensaje: "",
  });

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tipo = document.querySelector('[data="tipo"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const texto = document.querySelector('[data="texto"]').value;
    const dibujo = document.querySelector('[data="dibujo"]').value;
    const observaciones = document.querySelector(
      '[data="observaciones"]'
    ).value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const pago = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');
    const abono = parseInt(entrega) > 0 ? pago : "";

    const body = {
      id_cliente: id,
      nro_orden: nro_orden(),
      fecha_creacion: fecha_creacion(),
      atendido_por: atendido_por(),
      fecha_entrega,
      hora_entrega,
      muestra,
      tipo,
      tamano,
      texto,
      dibujo,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono,
    };

    btnSubmit.setAttribute("disabled", true);

    await crearOrden(urlApi + "/api/sellos", body)
      .then((res) => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute("disabled");
        setRespuestaServidor({ registro: registro, mensaje: mensaje });
        if (registro) navigate(`/pdf/sellos/${nro_orden}`);
      })
      .catch((e) => console.log(e));
  };

  const handleChange = () => {
    setRespuestaServidor({ registro: false, mensaje: "" });
  };

  return (
    <div className="animacion">
      <div className="icon-nombre-tipo-trabajo--container">
        <TfiStamp className="icon-tipo-trabajo" />
        <h5 className="nombre-tipo-trabajo">Sellos</h5>
      </div>
      <form
        name="form-sellos"
        onSubmit={handleSubmint}
        onChange={handleChange}
        className="form"
      >
        <div className="nueva-orden--container-3">
          <FechaHora />
          <Muestra />
        </div>
        <div className="nueva-orden--container-1">
          <div className="nueva-orden--container-2">
            <Tipo />
            <InputText
              props={
                new InputTextModel(
                  "",
                  "label-input-escribir",
                  "",
                  "Tamaño",
                  "input-escribir",
                  "tamano"
                )
              }
            />
            <InputText
              props={
                new InputTextModel(
                  "",
                  "label-input-escribir",
                  "",
                  "Texto",
                  "input-escribir",
                  "texto"
                )
              }
            />
            <InputText
              props={
                new InputTextModel(
                  "",
                  "label-input-escribir",
                  "",
                  "Descripción del dibujo",
                  "input-escribir",
                  "dibujo"
                )
              }
            />
          </div>
          <TextArea
            props={
              new TextAreaModel(
                "",
                "label-text-area",
                "",
                "Observaciones",
                "input-escribir text-area",
                "observaciones"
              )
            }
          />
          <div className="flex-column gap-1 flex-start strech">
            <DetallePago />
            <div>
              {!respuestaServidor.registro ? (
                <span>{respuestaServidor.mensaje}</span>
              ) : null}
              <button type="submit" data="btn-submit" className="btn-submit">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellosComp;
