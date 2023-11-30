// Función para procesar y mostrar el array de datos
function procesarDatos() {
  // Obtener el elemento <div> donde se mostrarán los resultados
  let resultadosDiv = document.getElementById("resultados");

  // Limpiar contenido anterior
  resultadosDiv.innerHTML = "";

  // Definir el array de datos
  let datos = ["Dato 1", "Dato 2", "Dato 3", "Dato 4"];

  // Crear un elemento <ul>
  let ul = document.createElement("ul");

  // Iterar sobre los elementos del array y crear elementos <li>
  datos.forEach(function(dato) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(dato));
    ul.appendChild(li);
  });

  // Agregar la <ul> al elemento <div> de resultados
  resultadosDiv.appendChild(ul);
}