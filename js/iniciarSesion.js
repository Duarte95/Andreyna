//import { ocultarElemento } from './ocultarSpan.js'
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

  function iniciarSesion() {
    // Verificar si el usuario ya ha iniciado sesión anteriormente
    if (sessionStorage.getItem('sesionIniciada') === 'true') {
      // Usuario ya ha iniciado sesión, redirigir a la página correspondiente
      redirigirSegunDepartamento();
      return; // Salir de la función para evitar ejecutar el resto del código de inicio de sesión
    }

    const usuarioIngresado = document.querySelector('[data-usuario]').value;
    const claveIngresada = document.querySelector('[data-clave]').value;
    const seleccionElement = document.querySelector('.selected');
    const seleccionIngresada = seleccionElement ? seleccionElement.textContent.trim() : '';
  
    const spanError = document.querySelector('[data-mensaje]');
  
    if (usuarioIngresado === '' || claveIngresada === '') {
      // Verificar si los inputs Usuario y Clave estan vacios
      spanError.style.display = 'block';
      spanError.classList.add('error');
      spanError.innerHTML = 'Los campos "Usuario" y "Clave" no pueden estar vacios';
      setTimeout(function() {
        spanError.style.display = 'none';
      }, 2000); // Ocultar después de 3 segundos (3000 milisegundos)
    } else if (seleccionIngresada === '') {
      // Verificar si departamento ha sido seleccionado luego de haber verificado que usuario y clave tengan contenido
      spanError.style.display = 'block';
      spanError.classList.add('error');
      spanError.innerHTML = 'Debe seleccionar un departamento';
      setTimeout(function() {
        spanError.style.display = 'none';
      }, 2000); // Ocultar después de 3 segundos (3000 milisegundos)
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
          spanError.classList.add('error');
          spanError.innerHTML = 'El usuario no pertenece a este departamento';
          setTimeout(function() {
            spanError.style.display = 'none';
          }, 2000); // Ocultar después de 3 segundos (3000 milisegundos)
        } else {
          // Inicio de sesión exitoso
          // Guardar indicador de inicio de sesión en sessionStorage
          sessionStorage.setItem('sesionIniciada', 'true');
          // Redirigir según el departamento
          redirigirSegunDepartamento(seleccionIngresada);
        }
      } else {
        // Inicio de sesión fallido
        spanError.style.display = 'block';
        spanError.classList.add('error');
        spanError.innerHTML = 'Clave o Usuario errado, por favor intente nuevamente';
      }
    }
  }

  function redirigirSegunDepartamento(departamento) {
  
    if (departamento === 'Oficina de Planeacion y Presupuesto') {
      // Redirigir a la página correspondiente para el departamento 'Oficina de Planeacion y Presupuesto'
      window.location.href = '../pantallas/seccion_procesos.html';
    } else {
      // Redirigir a la página correspondiente para los otros departamentos
      window.location.href = '../pantallas/seccion_metas.html';
    }
  }  
  

  // Evento para el botón de ingreso
  document.querySelector('[data-entrar]').addEventListener('click', function(event) {
    event.preventDefault();
    iniciarSesion();
  });