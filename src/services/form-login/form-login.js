export const solicitudLogin = (url, nickname, password) => {
  return fetch(url, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({nickname, password})
  })
};

export const setSessionLocal = (auth, nickname) => {
  localStorage.setItem('usuario-logeado', auth);
  localStorage.setItem('usuario-actual', nickname);
};

export const resetInputs = ( inputNickname, inputPassword) => {
    inputNickname.value = '';
    inputNickname.focus();
    inputPassword.value = '';
};