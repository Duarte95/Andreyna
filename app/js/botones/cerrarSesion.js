/*const botonSalir = document.querySelector("[data-salir]");

botonSalir.addEventListener("click", function () {
  // Realizar acciones de cierre de sesión, como eliminar datos de sesión, limpiar cookies, etc.
  // Eliminar indicador de inicio de sesión de sessionStorage
  sessionStorage.removeItem("sesionIniciada");
  // Redireccionar al usuario a la página de destino
  window.location.href = "../pantallas/seccion_finalizado.html";
  // Reemplazar la URL actual en el historial del navegador
  history.replaceState(null, null, "../pantallas/ingreso_sistema.html");
});*/

///../seccion_finalizado.html'; agregar esto para definiciones y establecer la condicion

const botonSalir = document.querySelector('[data-salir]');

botonSalir.addEventListener('click', function() {
  // Realizar acciones de cierre de sesión
  
  sessionStorage.removeItem('sesionIniciada'); // Eliminar indicador de inicio de sesión de sessionStorage
  
  // Obtener la ruta relativa actual del archivo
  const rutaActual = window.location.pathname;
  
  // Reemplazar la ruta según tus necesidades
  let nuevaRuta = '';
  
  // Verificar si la ruta actual está en una subcarpeta
  if (rutaActual.includes('/definiciones/')) {
    nuevaRuta = '../seccion_finalizado.html';
  } else {
    nuevaRuta = '../pantallas/seccion_finalizado.html';
  }
  
  // Redireccionar al usuario a la nueva ruta
  window.location.href = nuevaRuta;
  //
//  if (rutaActual.includes('/definiciones/')) {
//    host.replaceState(null, null, '../singreso_sostema.html');
//  }else {
      // Reemplazar la URL actual en el historial del navegador
  history.replaceState(null, null, '../pantallas/ingreso_sistema.html');
//  }
  
});