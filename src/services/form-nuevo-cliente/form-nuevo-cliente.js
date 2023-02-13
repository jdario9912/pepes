export const enviarDatos = (url, nombre, telefono, email, observaciones) => {
  return fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({nombre, telefono, email, observaciones})
  })
};