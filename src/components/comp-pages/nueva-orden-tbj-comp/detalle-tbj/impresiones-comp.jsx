import { useContext, useState } from "react";
import InputText from "../../../input-text";
import TamanoPapel from "./impresiones-comp/tamano-papel";
import { InputTextModel } from "../../../../models/input-text-model";
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
import { AiOutlinePrinter } from "react-icons/ai";
import FechaHora from "../fecha-hora";
import {
  opcionesImpresion,
  opcionesFaz,
  opcionesOrientacion,
  opcionesAnillado,
  opcionesAbrochado,
  opcionesCorte,
} from "../../../../models/opciones-impresiones";
import InputRadio from "../../../input-radio";

const ImpresionesComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({
    registro: false,
    mensaje: "",
  });
  const [impresion, setImpresion] = useState("");
  const [faz, setFaz] = useState("");
  const [orientacion, setOrientacion] = useState("");
  const [anillado, setAnillado] = useState("");
  const [abrochado, setAbrochado] = useState("");
  const [corte, setCorte] = useState("");

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const ubicacion_archivo = document.querySelector(
      '[data="ubicacion-archivo"]'
    ).value;
    const tipo_papel = document.querySelector('[data="tipo-papel"]').value;
    const tamano_papel = document.querySelector('[data="tamano-papel"]').value;
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
      impresion,
      ubicacion_archivo,
      faz,
      tipo_papel,
      tamano_papel,
      orientacion,
      anillado,
      abrochado,
      corte,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono,
    };

    btnSubmit.setAttribute("disabled", true);

    await crearOrden(urlApi + "/api/impresiones", body)
      .then((res) => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute("disabled");
        setRespuestaServidor({ registro: registro, mensaje: mensaje });
        if (registro) navigate(`/pdf/impresiones/${nro_orden}`);
      })
      .catch((e) => console.log(e));
  };

  const handleChange = () => {
    setRespuestaServidor({ registro: false, mensaje: "" });
  };

  return (
    <div className="animacion">
      <div className="icon-nombre-tipo-trabajo--container">
        <AiOutlinePrinter className="icon-tipo-trabajo" />
        <h5 className="nombre-tipo-trabajo">Impresiones</h5>
      </div>
      <form
        name="form-impresiones"
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
            <InputRadio
              texto="Impresión"
              accion={setImpresion}
              name="impresion"
              opciones={opcionesImpresion}
            />
            <InputText
              props={
                new InputTextModel(
                  "",
                  "label-input-escribir",
                  "",
                  "Ubicación del archivo",
                  "input-escribir",
                  "ubicacion-archivo"
                )
              }
            />
            <InputText
              props={
                new InputTextModel(
                  "",
                  "label-input-escribir",
                  "",
                  "Tipo de papel",
                  "input-escribir",
                  "tipo-papel"
                )
              }
            />
            <TamanoPapel />
            <InputRadio
              texto="Orientacion"
              accion={setOrientacion}
              name="orientacion"
              opciones={opcionesOrientacion}
            />
            <InputRadio
              texto="Faz"
              accion={setFaz}
              name="faz"
              opciones={opcionesFaz}
            />
            <InputRadio
              texto="Abrochado"
              accion={setAbrochado}
              name="abrochado"
              opciones={opcionesAbrochado}
            />
            <InputRadio
              texto="Anillado"
              accion={setAnillado}
              name="anillado"
              opciones={opcionesAnillado}
            />
            <InputRadio
              texto="Corte"
              accion={setCorte}
              name="corte"
              opciones={opcionesCorte}
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

export default ImpresionesComp;
