// Objeto que almacenará los usuarios
const usuarios = [
    { usuario: 'andreyna', clave: 'Parraga12', departamento: 'Oficina de Planeacion y Presupuesto'},
    { usuario: 'usuario2', clave: 'Clave2', departamento: 'Direccion de Estimulo Creativo'},
    { usuario: 'usuario3', clave: 'Clave3', departamento: 'Oficina de Gestion'},
    { usuario: 'usuario4', clave: 'Clave4', departamento: 'Direccion de Investigacion'},
    { usuario: 'usuario5', clave: 'Clave5', departamento: 'Direccion de Apoyo'}
  ];
  
  // Función para validar la contraseña usando una expresión regular
  function validarContrasena(contrasena) {
    // Regex para validar la contraseña
    const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d).{8,}$/;
  
    return regexContrasena.test(contrasena);
  }
  
// Función para verificar el inicio de sesión
function iniciarSesion() {

    // Verificar si el usuario ya ha iniciado sesión anteriormente
    if (sessionStorage.getItem('sesionIniciada') === 'true') {
      // Usuario ya ha iniciado sesión, redirigir a la página correspondiente
      window.location.href = '../pantallas/seccion_metas.html';
      return; // Salir de la función para evitar ejecutar el resto del código de inicio de sesión
    }

  const usuarioIngresado = document.querySelector('[data-usuario]').value;
  const claveIngresada = document.querySelector('[data-clave]').value;
  const seleccionElement = document.querySelector('.selected');
  const seleccionIngresada = seleccionElement ? seleccionElement.textContent.trim() : '';

  const spanError = document.querySelector('[data-error]');

  if (usuarioIngresado === '' || claveIngresada === '') {
    spanError.style.display = 'block';
    spanError.innerHTML = 'Los campos "Usuario" y "Clave" no pueden estar vacios';
    console.log('Estos campos no pueden estar vacios. Debe elegir un departamento.');
  } else if (seleccionIngresada === '') {
    spanError.style.display = 'block';
    spanError.innerHTML = 'Debe seleccionar un departamento';
    console.log('Debe seleccionar un departamento');
  } else {
    // Verificar si el usuario y la contraseña coinciden
    const usuarioEncontrado = usuarios.find(
      usuario => usuario.usuario === usuarioIngresado && usuario.clave === claveIngresada
    );

    if (usuarioEncontrado) {
      // Verificar si el usuario pertenece al departamento ingresado
      if (usuarioEncontrado.departamento !== seleccionIngresada) {
        // El usuario no pertenece a ese departamento
        spanError.style.display = 'block';
        spanError.innerHTML = 'El usuario no pertenece a ese departamento';
        console.log('El usuario no pertenece a ese departamento');
      } else {
        // Inicio de sesión exitoso
        console.log('Inicio de sesión exitoso');
        // Guardar indicador de inicio de sesión en sessionStorage
        sessionStorage.setItem('sesionIniciada', 'true');
        // Aquí puedes redirigir a la página correspondiente
        window.location.href = '../pantallas/seccion_metas.html';
      }
    } else {
      // Inicio de sesión fallido
      spanError.style.display = 'block';
      spanError.innerHTML = 'Clave o Usuario errado, por favor intente nuevamente';
      console.log('Clave o Usuario errado');
    }
  }
}
  
  // Evento para el botón de ingreso
  document.querySelector('[data-entrar]').addEventListener('click', function(event) {
    event.preventDefault();
    iniciarSesion();
  });

  // Función para mostrar u ocultar la contraseña
  function togglePasswordVisibility() {
    const input = document.querySelector('.input.clave');
    const inputContainer = document.querySelector('.input_container');
    const mostrarIcono = document.querySelector('.icono.mostrar');
    const ocultarIcono = document.querySelector('.icono.ocultar');
  
    if (input.type === 'password') {
      input.type = 'text';
      inputContainer.classList.add('mostrar');
      mostrarIcono.style.display = 'none';
      ocultarIcono.style.display = 'block';
    } else {
      input.type = 'password';
      inputContainer.classList.remove('mostrar');
      mostrarIcono.style.display = 'block';
      ocultarIcono.style.display = 'none';
    }
  }
  
  
