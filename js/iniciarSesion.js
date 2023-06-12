// Objeto que almacenará los usuarios
const usuarios = [
    { usuario: 'andreyna', clave: 'Parraga12', },
    { usuario: 'usuario2', clave: 'Clave2', },
    { usuario: 'usuario3', clave: 'Clave3', },
    { usuario: 'usuario4', clave: 'Clave2', },
    { usuario: 'usuario5', clave: 'Clave3', }
  ];
  
  // Función para validar la contraseña usando una expresión regular
  function validarContrasena(contrasena) {
    // Regex para validar la contraseña
    const regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d).{8,}$/;
  
    return regexContrasena.test(contrasena);
  }
  
  // Función para verificar el inicio de sesión
  function iniciarSesion() {
    const usuarioIngresado = document.querySelector('[data-usuario]').value;
    const claveIngresada = document.querySelector('[data-clave]').value;
  
    // Verificar si el usuario y la contraseña coinciden
    const usuarioEncontrado = usuarios.find(
      usuario => usuario.usuario === usuarioIngresado && usuario.clave === claveIngresada
    );
  
    if (usuarioEncontrado) {
      // Inicio de sesión exitoso
      console.log('Inicio de sesión exitoso');
      // Aquí puedes redirigir a la página correspondiente
      window.location.href = '../pantallas/seccion_metas.html';
    } else {
      // Inicio de sesión fallido
      console.log('Inicio de sesión fallido');
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
  
  
