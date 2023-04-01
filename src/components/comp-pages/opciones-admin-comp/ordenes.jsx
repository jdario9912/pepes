import React from "react";
import Icono from "./ordenes/icono";
import TBody from "./ordenes/t-body";
import THead from "./ordenes/t-head";

const ordenes = [
  // {
  //   id: 2,
  //   nombre: 'Kinsa',
  //   nro_orden: 232311720655,
  //   tipo_trabajo: 'impresiones',
  // },
];

const Ordenes = () => {
  return (
    <div className="modulo admin--container">
      <Icono />
      <table>
        <THead />
        <TBody ordenes={ordenes} />
      </table>
    </div>
  );
};

export default Ordenes;
