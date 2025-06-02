function paginar(idPagina) {
  document.querySelector('.item.active').classList.remove('active');
  document.getElementById(idPagina).classList.add('active');
}
