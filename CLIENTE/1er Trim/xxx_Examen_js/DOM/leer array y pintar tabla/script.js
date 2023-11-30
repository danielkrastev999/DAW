// Función para cargar y procesar el array de datos
function procesarDatos() {
  // Obtener la tabla y sus elementos thead y tbody
  let tabla = document.getElementById("tablaDatos");
  let thead = tabla.getElementsByTagName("thead")[0];
  let tbody = tabla.getElementsByTagName("tbody")[0];

  // Definir el array de datos
  let datos = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Carlos", edad: 22, ciudad: "Sevilla" }
  ];

  // Crear la cabecera de la tabla
  let cabecera = document.createElement("tr");
  for (let key in datos[0]) {
    if (datos[0].hasOwnProperty(key)) {
      let th = document.createElement("th");
      th.appendChild(document.createTextNode(key));
      cabecera.appendChild(th);
    }
  }
  thead.appendChild(cabecera);

  // Crear las filas de la tabla con los datos
  datos.forEach(function(item) {
    let fila = document.createElement("tr");

    // Iterar sobre las propiedades del objeto y crear celdas
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        let celda = document.createElement("td");
        celda.appendChild(document.createTextNode(item[key]));
        fila.appendChild(celda);
      }
    }

    // Agregar la fila al tbody de la tabla
    tbody.appendChild(fila);
  });
}

// Llamar a la función cuando la página se cargue
//window.onload = procesarDatos;