function cargarArchivoPDF(urlArchivo) {
  // Elemento contenedor del PDF
  const container = document.getElementById("pdfContainer");

  // Cargar el archivo PDF
  pdfjsLib.getDocument(urlArchivo).promise.then(function (pdf) {
    // Obtener la primera página del PDF
    pdf.getPage(1).then(function (page) {
      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      // Crear lienzo para mostrar la página
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      container.appendChild(canvas);

      // Renderizar la página en el lienzo
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      page.render(renderContext);
    });
  });
}

function imprimirArchivo(urlArchivo) {
  const iframe = document.createElement("iframe");
  iframe.src = urlArchivo;
  iframe.style.display = "none";
  document.body.appendChild(iframe);
  iframe.contentWindow.print();
}

// function imprimirArchivo(urlArchivo) {
//   const nuevaVentana = window.open(urlArchivo, "_blank");
//   nuevaVentana.addEventListener("load", function() {
//     nuevaVentana.print();
//   });
//}
