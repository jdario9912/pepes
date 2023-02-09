export const solicitudLogin = (url, nickname, password) => {
  return fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({nickname, password})
  })
};

export const setSessionLocal = (auth, nickname, permisions) => {
  localStorage.setItem('usuario-logeado', auth);
  localStorage.setItem('usuario-actual', nickname);
  localStorage.setItem('permisos', permisions);
};

export const resetSessionLocal = () => {
  localStorage.removeItem('usuario-logeado');
  localStorage.removeItem('usuario-actual');
  localStorage.removeItem('permisos');
}

export const resetInputs = ( inputNickname, inputPassword) => {
    inputNickname.value = '';
    inputNickname.focus();
    inputPassword.value = '';
};