export const crearEmpleado = (url, body) => {
  return fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
};