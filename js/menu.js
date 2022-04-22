const closeEl = document.querySelector('[data-close]')
closeEl.onclick = function() {
  if (confirm('Вы действительно хотите закрыть страницу?')) {
    // window.close();
  }
}
