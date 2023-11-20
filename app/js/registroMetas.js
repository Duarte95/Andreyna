const insertarMetas = document.querySelector("[data-insertar]");
const editarMetas = document.querySelector("[data-editar]");
const metasRegistradas = document.querySelector(".registrado");
const spanExito = document.querySelector("[data-mensaje]"); //importar esta variable
const inputs = document.querySelectorAll(".input");

insertarMetas.addEventListener("click", (e) => {
  let metasVacias = false;

  inputs.forEach((input) => {
    if (input.value === "") {
      metasVacias = true;
    }
  });

  if (metasVacias) {
    spanExito.style.display = "block";
    spanExito.classList.add("error");
    spanExito.innerHTML = "Debe ingresar las metas";
    setTimeout(function () {
      spanExito.style.display = "none";
    }, 2000); // Ocultar después de 3 segundos (3000 milisegundos)
  } else {
    spanExito.style.display = "block";
    spanExito.classList.add("exito");
    spanExito.innerHTML = "Metas insertadas con Éxito";
    editarMetas.style.display = "block";
    inputs.forEach((input) => {
      input.classList.add("registrado");
      input.disabled = true;
    });
    insertarMetas.disabled = true; // Desactivar el botón
  }
});

editarMetas.addEventListener("click", (e) => {
  insertarMetas.disabled = false;
  inputs.forEach((input) => {
    input.disabled = false;
    input.classList.remove("registrado");
    spanExito.classList.remove("exito");
    spanExito.style.display = "none";
    editarMetas.style.display = "none";
  });
});

//condicionales si no hay metas agrega error que indique que agreguen metas

//condicional que bloquee inputs e indiquen que se inserto con exito
