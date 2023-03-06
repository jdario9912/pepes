const sacarGuiones = (fecha) => {
  if(fecha.includes('-')) return fecha.replace('-', '').replace('-', '');
  if(fecha.includes('/')) return fecha.replace('/', '').replace('/', '');
};

export const ordenarPorFecha = (ordenes) => {
  
  return ordenes.sort((a, b) => parseInt(sacarGuiones(a.fecha_entrega)) - parseInt(sacarGuiones(b.fecha_entrega)));
};

export const ordenarPorTipo = (ordenes) => {
  return ordenes.sort((a, b) => a.tipo_trabajo.localeCompare(b.tipo_trabajo));
};