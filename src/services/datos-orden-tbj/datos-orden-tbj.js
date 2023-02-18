export const nro_orden = () => {
  const milisegundos = new Date().getMilliseconds();
  const segundo = new Date().getSeconds();
  const minuto = new Date().getMinutes();
  const yearFull = new Date().getFullYear();
  const year = yearFull.toString().slice(2,4);
  const hoy = new Date().getDate();
  const mes = new Date().getMonth();

  return `${year}${mes}${hoy}${minuto}${segundo}${milisegundos}`;
};

export const fecha_creacion = () => {
  const dia = new Date().getDate();
  let mes = new Date().getMonth("MM");
  const year = new Date().getFullYear();

  return `${dia}/${mes + 1}/${year}`;
}

export const formatear_fecha = (fecha) => {
  return fecha.split('-').reverse().join('/');
}