import React from "react";
import SelectOption from "../../../../select-option";
import { SelectOptionModel } from "../../../../../models/select-option-model";

const TamanoPapel = () => {
  const opciones = ["A4", "A5", "A3", "Oficio", "Legal"];
  return (
    <>
      <SelectOption
        props={
          new SelectOptionModel(
            "Tamaño:",
            "label-select",
            "select",
            "",
            "tamano-papel",
            opciones
          )
        }
      />
    </>
  );
};

export default TamanoPapel;
