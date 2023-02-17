export const nro_orden = () => {
  const milisegundos = new Date().getMilliseconds();
  const segundo = new Date().getSeconds();
  const yearFull = new Date().getFullYear();
  const year = yearFull.toString().slice(2,4);
  const hoy = new Date().getDate();
  const mes = new Date().getMonth();
  const orden = `${year}${mes}${hoy}${segundo}${milisegundos}`;

  return parseInt(orden);
}