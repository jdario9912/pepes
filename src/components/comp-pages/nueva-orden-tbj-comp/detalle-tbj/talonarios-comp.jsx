import { useState, createContext, useContext, useEffect } from "react";
import InputNumber from "../../../input-number";
import InputText from "../../../input-text";
import Aviso from "./talonarios-comp/aviso";
import { InputTextModel } from "../../../../models/input-text-model";
import { InputNumberModel } from "../../../../models/input-number-model";
import Tipo from "./talonarios-comp/tipo";
import Tamano from "./talonarios-comp/tamano";
import PuntilladoEmblocado from "./talonarios-comp/puntillado-emblocado";
import ColorDuplicado from "./talonarios-comp/color-duplicado";
import ColorTriplicado from "./talonarios-comp/color-triplicado";
import { NuevaOrdenTbjCompContext } from "../../nueva-orden-tbj-comp";
import { useNavigate } from "react-router-dom";
import {
  atendido_por,
  fecha_creacion,
  nro_orden,
} from "../../../../services/datos-orden-tbj/datos-orden-tbj";
import DetallePago from "../detalle-pago";
import TextArea from "../../../text-area";
import { TextAreaModel } from "../../../../models/text-area-model";
import Muestra from "../muestra";
import { crearOrden } from "../../../../services/form-nueva-orden/crear-orden";
import { urlApi } from "../../../../services/url/url-api";
import { TbFileInvoice } from "react-icons/tb";
import FechaHora from "../fecha-hora";
import {
  opcionesModeloAnterior,
  opcionesTieneLogo,
  opcionesTriplicado,
} from "../../../../models/opciones-talonarios";
import InputRadio from "../../../input-radio";

export const TalonariosCompContext = createContext();

const TalonariosComp = () => {
  const { clienteS, muestra } = useContext(NuevaOrdenTbjCompContext);
  const navigate = useNavigate();
  const [respuestaServidor, setRespuestaServidor] = useState({
    registro: false,
    mensaje: "",
  });
  const [mostrarColorTriplicado, setMostrarColorTriplicado] = useState(false);
  const [mostrarUbicacionLogo, setMostrarUbicacionLogo] = useState(false);
  const [modeloAnterior, setModeloAnterior] = useState("");
  const [tieneLogo, setTieneLogo] = useState("");
  const [triplicado, setTriplicado] = useState("");

  useEffect(() => {
    setMostrarColorTriplicado(triplicado === "Si" ? true : false);
  }, [triplicado]);

  useEffect(() => {
    setMostrarUbicacionLogo(tieneLogo === "Si" ? true : false);
  }, [tieneLogo]);

  const handleSubmint = async (e) => {
    e.preventDefault();
    const { id } = clienteS;
    const fecha_entrega = document.querySelector('[data="fecha"]').value;
    const hora_entrega = document.querySelector('[data="hora"]').value;
    const tipo = document.querySelector('[data="tipo"]').value;
    const cantidad = document.querySelector('[data="cantidad"]').value;
    const tamano = document.querySelector('[data="tamano"]').value;
    const ubicacionLogo = document.querySelector(
      '[data="ubicacion-logo"]'
    ).value;
    const numero_desde = document.querySelector('[data="numero-desde"]').value;
    const puntillado_emblocado = document.querySelector(
      '[data="puntillado"]'
    ).value;
    const color_duplicado = document.querySelector(
      '[data="color-duplicado"]'
    ).value;
    const colorTriplicado = document.querySelector(
      '[data="color-triplicado"]'
    ).value;
    const observaciones = document.querySelector(
      '[data="observaciones"]'
    ).value;
    const total = document.querySelector('[data="total"]').value;
    const entrega = document.querySelector('[data="entrega"]').value;
    const pago = document.querySelector('[data="abono"]').value;
    const btnSubmit = document.querySelector('[data="btn-submit"]');
    const abono = parseInt(entrega) > 0 ? pago : "";
    const color_triplicado = triplicado === "No" ? "--" : colorTriplicado;
    const ubicacion_logo = tieneLogo === "No" ? "--" : ubicacionLogo;

    const body = {
      id_cliente: id,
      nro_orden: nro_orden(),
      fecha_creacion: fecha_creacion(),
      atendido_por: atendido_por(),
      fecha_entrega,
      hora_entrega,
      muestra,
      tipo,
      cantidad,
      tamano,
      modelo_anterior: modeloAnterior,
      tiene_logo: tieneLogo,
      ubicacion_logo,
      numero_desde,
      puntillado_emblocado,
      color_duplicado,
      triplicado,
      color_triplicado,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono,
    };

    btnSubmit.setAttribute("disabled", true);

    await crearOrden(urlApi + "/api/talonarios", body)
      .then((res) => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute("disabled");
        setRespuestaServidor({ registro: registro, mensaje: mensaje });
        if (registro) navigate(`/pdf/talonarios/${nro_orden}`);
      })
      .catch((e) => console.log(e));
  };

  const handleChange = () => {
    setRespuestaServidor({ registro: false, mensaje: "" });
  };

  return (
    <TalonariosCompContext.Provider
      value={{
        setMostrarColorTriplicado,
        setMostrarUbicacionLogo,
        mostrarColorTriplicado,
      }}
    >
      <div className="animacion">
        <div className="icon-nombre-tipo-trabajo--container">
          <TbFileInvoice className="icon-tipo-trabajo" />
          <h5 className="nombre-tipo-trabajo">Talonarios</h5>
        </div>
        <form
          name="form-talonarios"
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
              <InputNumber
                props={
                  new InputNumberModel(
                    "",
                    "label-input-escribir",
                    "input-escribir",
                    "",
                    "Cantidad",
                    "cantidad"
                  )
                }
              />
              <Tamano />
              <InputRadio
                texto="Modelo anterior"
                accion={setModeloAnterior}
                opciones={opcionesModeloAnterior}
                name="modelo-anterior"
              />
              <InputRadio
                texto="Tiene logo"
                accion={setTieneLogo}
                opciones={opcionesTieneLogo}
                name="tiene-logo"
              />
              <div hidden={!mostrarUbicacionLogo} className='label-input-escribir'>
                <InputText
                  props={
                    new InputTextModel(
                      "",
                      "label-input-escribir",
                      "",
                      "Ubicación del logo",
                      "input-escribir",
                      "ubicacion-logo"
                    )
                  }
                />
              </div>
              <InputNumber
                props={
                  new InputNumberModel(
                    "",
                    "label-input-escribir",
                    "input-escribir",
                    "",
                    "Numero desde",
                    "numero-desde"
                  )
                }
              />
              <PuntilladoEmblocado />
              <ColorDuplicado />
              <InputRadio
                texto="Triplicado"
                accion={setTriplicado}
                opciones={opcionesTriplicado}
                name="triplicado"
              />
              <div hidden={!mostrarColorTriplicado}>
                <ColorTriplicado />
              </div>
            </div>
            <div className="flex-column">
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
              <Aviso />
            </div>
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
    </TalonariosCompContext.Provider>
  );
};

export default TalonariosComp;
