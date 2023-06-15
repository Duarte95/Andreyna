const botonSalir = document.querySelector('[data-salir]');

botonSalir.addEventListener('click', function() {
  // Realizar acciones de cierre de sesión, como eliminar datos de sesión, limpiar cookies, etc.
  // Eliminar indicador de inicio de sesión de sessionStorage
  sessionStorage.removeItem('sesionIniciada');
  // Redireccionar al usuario a la página de destino
  window.location.href = '../pantallas/seccion_finalizado.html';
  // Reemplazar la URL actual en el historial del navegador
  history.replaceState(null, null, '../pantallas/ingreso_sistema.html');
});
