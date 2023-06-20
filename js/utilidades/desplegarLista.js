function toggleSubProcesos(categoria) {
  const subProcesos = categoria.nextElementSibling;

  if (subProcesos.style.display === "none") {
    subProcesos.style.display = "block";
  } else {
    subProcesos.style.display = "none";
  }
}
