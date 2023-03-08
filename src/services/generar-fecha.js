export const generarFecha = (fecha) => {
  const ano = new Date().getFullYear();
  const m = new Date().getMonth() + 1;
  const d = new Date().getDate();
  const cero = '0';
  
  const dia = d.toString().length === 1 ? cero.concat(d) : d;
  const mes = m.toString().length === 1 ? cero.concat(m) : m;

  if(fecha.includes('-')) return ano + '-' + mes + '-' + dia;
  
  if(fecha.includes('/')) return ano + '/' + mes + '/' + dia;
};