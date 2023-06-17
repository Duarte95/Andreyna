const insertarMetas = document.querySelector('[data-insertar]');

const spanExito = document.querySelector('[data-exito]');

insertarMetas.addEventListener('click', e => { 
  spanExito.style.display = 'block';
  spanExito.innerHTML = 'Metas insertadas con Exito';
})

//condicionales si no hay metas agrega error que indique que agreguen metas

//condicional que bloquee inputs e indiquen que se inserto con exito