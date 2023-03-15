export const opcionesAdmin = (administrar, action) => {
  switch (action.type) {
    case 'empleados':
      return administrar = 'empleados';
    
    case 'clientes':
      return administrar = 'clientes';

    case 'ordenes':
      return administrar = 'ordenes';
    
    case 'historial':
      return administrar = 'historial';
    default:
      return administrar = '';
  }
};