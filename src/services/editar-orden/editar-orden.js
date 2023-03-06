export const editarOrden = (url, body) => {
  return fetch(url, {
    method: 'PATCH',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
};