export const actualizarCliente = (url, body) => {
  return fetch(url, {
    method: 'PATCH',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}