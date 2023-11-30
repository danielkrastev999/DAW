  // Función para procesar y mostrar el array de datos
  function procesarDatos() {
    // Obtener la tabla y su elemento tbody
    let tabla = document.getElementById("tablaDatos");
    let tbody = tabla.querySelector("tbody");

    // Limpiar contenido anterior
    tbody.innerHTML = "";

    // Definir el array de datos
    let datos = ["Dato 1", "Dato 2", "Dato 3", "Dato 4"];

    // Crear filas de la tabla con los datos
    datos.forEach(function(dato) {
      let fila = document.createElement("tr");
      let celda = document.createElement("td");
      celda.appendChild(document.createTextNode(dato));
      fila.appendChild(celda);
      tbody.appendChild(fila);
    });
  }