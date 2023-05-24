const usuario = document.querySelector("[data-usuario]");

const clave = document.querySelector("[data-clave]");

const btnEntrar = document.querySelector("[data-entrar]");

btnEntrar.addEventListener("click", ()=>{
  console.log(usuario.value);
  console.log(clave.value);
})