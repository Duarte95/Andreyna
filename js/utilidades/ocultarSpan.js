export  function ocultarElemento(elemento, tiempo) {
    setTimeout(function() {
      elemento.style.display = 'none';
    }, tiempo);
  }
  