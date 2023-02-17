export const fecha_creacion = () => {
  const dia = new Date().getDay();
  const mes = new Date().getMonth();
  const year = new Date().getFullYear();

  return `${dia}/${mes}/${year}`;
}