const metasAlc = document.querySelector("[data-alcanzadas]");

const metasPro = document.querySelector("[data-propuestas]");

const btnInsertar = document.querySelector("[data-insertar]");

btnInsertar.addEventListener("click", ()=>{
  console.log(metasAlc.value);
  console.log(metasPro.value);
})