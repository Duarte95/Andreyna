export class autenticacion {
  
  #usuario;
  #clave;
  departamento;
  
  constructor (user, pass, depart){
    
    this.#usuario = user;
    this.#clave = pass;
    this.departamento = depart;
    
  }
  
  permisos (departamento) {
    
  }
  
}