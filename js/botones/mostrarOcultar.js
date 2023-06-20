// Función para mostrar u ocultar la contraseña
function togglePasswordVisibility() {
  const input = document.querySelector(".input.clave");
  const inputContainer = document.querySelector(".input_container");
  const mostrarIcono = document.querySelector(".icono.mostrar");
  const ocultarIcono = document.querySelector(".icono.ocultar");

  if (input.type === "password") {
    input.type = "text";
    inputContainer.classList.add("mostrar");
    mostrarIcono.style.display = "none";
    ocultarIcono.style.display = "block";
  } else {
    input.type = "password";
    inputContainer.classList.remove("mostrar");
    mostrarIcono.style.display = "block";
    ocultarIcono.style.display = "none";
  }
}
