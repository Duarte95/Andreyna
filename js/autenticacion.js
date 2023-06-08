import { autenticacion } from "./clases/registros.js"

const usuario = document.querySelector("[data-usuario]");

const clave = document.querySelector("[data-clave]");

const departamento = document.querySelector("[data-departamento]");

const btnEntrar = document.querySelector("[data-entrar]");

const user1 = new autenticacion(andre, 1234, "calidad");

btnEntrar.addEventListener("click", ()=>{
  console.log(usuario.value);
  console.log(clave.value);
  console.log(departamento.value);
  if (usuario.value && clave.value && departamento.value == autenticacion(user, pass, depart)) {
    console.log("ingresaste");
  }else{
    console.log("clave errada, agregar si es o no del departamento, condicional");
  }
})