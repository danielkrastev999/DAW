// Función para cargar y procesar el archivo JSON
function cargarDatos() {
    // Obtener el elemento <div> donde se mostrarán los resultados
    let resultadosDiv = document.getElementById("resultados");

    // Vaciar el contenido a cada click para que no se acumule
    resultadosDiv.innerHTML = "";

    // Realizar una solicitud para cargar el archivo JSON
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        // Parsear el JSON
        let datos = JSON.parse(this.responseText);

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
    };

    // Especificar el archivo JSON que deseas cargar
    xhr.open("GET", "datos.json", true);
    xhr.send();
  }

  // Llamar a la función cuando la página se cargue
//onload = cargarDatos;