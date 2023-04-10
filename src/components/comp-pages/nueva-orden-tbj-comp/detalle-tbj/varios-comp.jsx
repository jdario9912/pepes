import React, { useState, useContext } from "react";
import TextArea from "../../../text-area";
import { TextAreaModel } from "../../../../models/text-area-model";
import Muestra from "../muestra";
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
import { TbQuestionMark } from "react-icons/tb";
import FechaHora from "../fecha-hora";

const VarioComp = () => {
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
    const detalle = document.querySelector('[data="detalle"]').value;
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
      detalle,
      observaciones,
      total,
      entrega,
      estado: "pendiente",
      abono,
    };

    btnSubmit.setAttribute("disabled", true);

    await crearOrden(urlApi + "/api/varios", body)
      .then((res) => res.json())
      .then(({ registro, mensaje, nro_orden }) => {
        btnSubmit.removeAttribute("disabled");
        setRespuestaServidor({ registro: registro, mensaje: mensaje });
        if (registro) navigate(`/pdf/varios/${nro_orden}`);
      })
      .catch((e) => console.log(e));
  };

  const handleChange = () => {
    setRespuestaServidor({ registro: false, mensaje: "" });
  };

  return (
    <div className="animacion">
      <div className="icon-nombre-tipo-trabajo--container">
        <TbQuestionMark className="icon-tipo-trabajo" />
        <h5 className="nombre-tipo-trabajo">Varios</h5>
      </div>
      <form
        name="form-varios"
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
            <TextArea
              props={
                new TextAreaModel(
                  "",
                  "label-text-area",
                  "",
                  "Detalle",
                  "input-escribir text-area",
                  "detalle"
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

export default VarioComp;
