function toggleSubProcesos(categoria) {
    const subProcesos = categoria.parentNode.querySelectorAll('.sub');
  
    // Alternar la clase 'show' en los subprocesos
    subProcesos.forEach(subProceso => {
      subProceso.classList.toggle('show');
    });
  }
  

