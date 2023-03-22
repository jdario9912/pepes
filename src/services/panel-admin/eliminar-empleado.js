export const eliminarEmpleado = (url) => {
  return fetch(url, {
    method: 'DELETE',
    headers: {
        "Content-Type": "application/json"
    }
  })
};