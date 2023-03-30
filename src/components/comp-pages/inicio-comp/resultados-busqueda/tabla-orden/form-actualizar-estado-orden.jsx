import React from "react";
import { BiUpload } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormActualizarEstadoOrden = ({
  handleSubmit,
  Orden,
  Tipo,
  isSubmiting,
  handleEditar,
}) => {
  return (
    <div className="container-absolute t-body--td-form-container">
      <button onClick={handleEditar} className="t-body--button">
        <AiOutlineCloseCircle className="no-action" />
      </button>
      <form onSubmit={handleSubmit} className="t-body--form-actualizar-orden">
        <input type="hidden" data="nro_orden" value={Orden} />
        <input type="hidden" data="tipo_trabajo" value={Tipo} />
        <select name="estado" id="estado" className="input-select">
          <option type="submit">a proveedor</option>
          <option type="submit">realizado</option>
          <option type="submit">entregado</option>
        </select>
        <button
          type="submit"
          disabled={isSubmiting}
          className="t-body--button amarillo"
        >
          <BiUpload />
        </button>
      </form>
    </div>
  );
};

export default FormActualizarEstadoOrden;
