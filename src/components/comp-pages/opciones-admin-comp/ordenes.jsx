import React from "react";
import Icono from "./ordenes/icono";
import TBody from "./ordenes/t-body";
import THead from "./ordenes/t-head";

// const ordenes = [
//   {
//     id: 33,
//     nombre: 'Gauchito',
//     nro_orden: 232121127664,
//     tipo_trabajo: 'tarjetas',
//   },
// ];

const Ordenes = () => {
  return (
    <div className="modulo admin--container">
      <Icono />
      <table>
        <THead />
        <TBody ordenes={[]} />
      </table>
    </div>
  );
};

export default Ordenes;
