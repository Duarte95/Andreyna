// Obtener todos los elementos de categoría
  const categorias = document.querySelectorAll('.categoria');
  const contenedor = document.querySelectorAll('.dropdown-content');
  
// Agregar el evento click a cada categoría
categorias.forEach(categoria => {
  categoria.addEventListener('click', () => {
    const contenedores = categoria.nextElementSibling;
    // Cambiar la clase 'active' a la categoría seleccionada
    contenedores.classList.toggle('show');
  });
});