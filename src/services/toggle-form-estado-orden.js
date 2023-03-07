export const toggleForm = (btnVer, btnOcultar, form, formContainer) => {
  btnOcultar.classList.toggle('btn-hidden');
  btnVer.classList.toggle('btn-hidden');
  form.classList.toggle('form-hidden');
  form.classList.toggle('t-body--form-actualizar-orden');
  formContainer.classList.toggle('container-absolute');
}