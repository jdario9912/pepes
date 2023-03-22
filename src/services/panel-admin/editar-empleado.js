export const editarEmpleado = (url, body) => {
  return fetch(url, {
    method: 'PUT',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
};