const fechaEntregaANumero = (fecha) => {
  if(fecha.includes('/')) return parseInt(fecha.replace('/', '').replace('/', ''));
  if(fecha.includes('-')) return parseInt(fecha.replace('-', '').replace('-', ''));
};

const fechaHoyANumero = () => {
  const ano = new Date().getFullYear();
  const m = new Date().getMonth() + 1;
  const d = new Date().getDate();
  const cero = '0';
  
  const dia = d.toString().length === 1 ? cero.concat(d) : d;
  const mes = m.toString().length === 1 ? cero.concat(m) : m;

  return parseInt(ano+mes+dia);
}

export const compararFechas = (fecha_entrega) => {
  return fechaEntregaANumero(fecha_entrega) < fechaHoyANumero();
}