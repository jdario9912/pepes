export const nro_orden = () => {
  const milisegundos = new Date().getMilliseconds();
  const segundo = new Date().getSeconds();
  const minuto = new Date().getMinutes();
  const yearFull = new Date().getFullYear();
  const year = yearFull.toString().slice(2,4);
  const hoy = new Date().getDate();
  const mes = new Date().getMonth();
  const orden = `${year}${mes}${hoy}${minuto}${segundo}${milisegundos}`;

  return orden;
};

export const fecha_creacion = () => {
  const dia = new Date().getDay();
  const mes = new Date().getMonth();
  const year = new Date().getFullYear();

  return `${dia}/${mes}/${year}`;
}

export const formatear_fecha = (fecha) => {
  return fecha.split('-').reverse().join('/');
}