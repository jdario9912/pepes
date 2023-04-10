import React from "react";
import FechaEntrega from "./fecha-entrega";
import HoraEntrega from "./hora-entrega";

const Entregar = ({ fecha, hora }) => {
  return (
    <div className="editar-orden--entregar">
      <div className="flex-row items-center">
        Entregar el
        <FechaEntrega valor={fecha} />
      </div>
      <div className="flex-row items-center">
        a las
        <HoraEntrega valor={hora} />
        hs
      </div>
    </div>
  );
};

export default Entregar;
