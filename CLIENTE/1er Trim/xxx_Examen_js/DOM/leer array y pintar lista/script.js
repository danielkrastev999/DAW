
// Función para cargar y procesar el array de datos
function procesarDatos() {
  // Obtener el elemento <div> donde se mostrarán los resultados
  let resultadosDiv = document.getElementById("resultados");

  // Definir el array de datos
  let datos = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Carlos", edad: 22, ciudad: "Sevilla" }
  ];

  // Iterar sobre cada objeto en el array
  datos.forEach(function(item) {
    // Crear un elemento <ul> para cada objeto
    let ul = document.createElement("ul");

    // Iterar sobre las propiedades del objeto y crear elementos <li>
    for (let key in item) {
      if (item.hasOwnProperty(key)) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(key + ": " + item[key]));
        ul.appendChild(li);
      }
    }

    // Agregar la <ul> al elemento <div> de resultados
    resultadosDiv.appendChild(ul);
  });
}

// Llamar a la función cuando la página se cargue
//window.onload = procesarDatos;
