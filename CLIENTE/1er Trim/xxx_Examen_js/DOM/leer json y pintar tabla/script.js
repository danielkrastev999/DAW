    // Función para cargar y procesar el archivo JSON
    function cargarDatos() {
      // Obtener la tabla y sus elementos thead y tbody
      let tabla = document.getElementById("tablaDatos");
      let thead = tabla.getElementsByTagName("thead")[0];
      let tbody = tabla.getElementsByTagName("tbody")[0];

      // Vacio el contenido para que se reescriba y no se acumule
      thead.innerHTML = ""
      tbody.innerHTML = ""

      // Realizar una solicitud para cargar el archivo JSON
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          // Parsear el JSON
          let datos = JSON.parse(this.responseText);

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
      };

      // Especificar el archivo JSON que deseas cargar
      xhr.open("GET", "datos.json", true);
      xhr.send();
    }

    // Llamar a la función cuando la página se cargue
   // window.onload = cargarDatos;