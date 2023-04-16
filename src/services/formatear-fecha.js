const dias = {
  0: "Lunes",
  1: "Martes",
  2: "Miércoles",
  3: "Jueves",
  4: "Viernes",
  5: "Sábado",
  6: "Domingo",
};

const invertirFecha = (fecha) => {
  if (fecha.includes("-") || fecha.includes("/"))
    return fecha.split("-").reverse().join("-");

  return fecha;
};

export const fechaRetiro = (fecha, hora) => {
  const date = new Date(fecha).getDay();

  return `Retirar el ${dias[date]} ${invertirFecha(fecha)} a las ${hora}hs`;
};

export const fechaEntrega = (fecha) => {
  const date = new Date(fecha).getDay();

  return `${dias[date]} ${invertirFecha(fecha)}`;
};
