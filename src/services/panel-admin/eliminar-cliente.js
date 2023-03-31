export const eliminarCliente = (url) => {
  return fetch(url, {
    method: 'DELETE',
    headers: {
        "Content-Type": "application/json"
    }
  })
};