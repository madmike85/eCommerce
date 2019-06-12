const modalLogin = document.querySelector('#login');

function modalOpen() {
  modalLogin.style.display = 'block';
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
}

function modalClose() {
  modalLogin.style.display = 'none';
  const top = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(top || '0') * -1);
}
