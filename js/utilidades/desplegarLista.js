/*// Obtener todos los elementos de categoría
  const categorias = document.querySelectorAll('.categoria');
  const contenedor = document.querySelectorAll('.dropdown-content');
  
// Agregar el evento click a cada categoría
categorias.forEach(categoria => {
  categoria.addEventListener('click', () => {
    const contenedores = categoria.nextElementSibling;
    // Cambiar la clase 'active' a la categoría seleccionada
    contenedores.classList.toggle('show');
  });
});*/
/*
// Obtener todos los elementos de categoría
const categorias = document.querySelectorAll(".categoria");
const contenedores = document.querySelectorAll(".dropdown-content");

// Agregar el evento click a cada categoría
categorias.forEach((categoria, index) => {
  categoria.addEventListener("click", () => {
    // Desactivar la clase 'show' en todos los contenedores
    contenedores.forEach((contenedor) => {
      contenedor.classList.remove("show");
    });

    // Activar la clase 'show' en el contenedor correspondiente
    contenedores[index].classList.add("show");
  });
});*/

// Obtener todos los elementos de categoría
const categorias = document.querySelectorAll(".categoria");
const contenedores = document.querySelectorAll(".dropdown-content");

// Agregar el evento click a cada categoría
categorias.forEach((categoria, index) => {
  categoria.addEventListener("click", () => {
    // Verificar si el contenedor ya tiene la clase 'show'
    const contenedorActual = contenedores[index];
    const estaMostrando = contenedorActual.classList.contains("show");

    // Desactivar la clase 'show' en todos los contenedores
    contenedores.forEach((contenedor) => {
      contenedor.classList.remove("show");
    });

    // Activar o remover la clase 'show' en el contenedor correspondiente
    if (!estaMostrando) {
      contenedorActual.classList.add("show");
    }
  });
});
