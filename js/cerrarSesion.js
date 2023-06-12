const botonSalir = document.querySelector('[data-salir]');

botonSalir.addEventListener('click', function() {
  // Realizar acciones de cierre de sesión, como eliminar datos de sesión, limpiar cookies, etc.
  
  // Redireccionar al usuario a la página de destino
  window.location.href = '../pantallas/seccion_finalizado.html';
});
