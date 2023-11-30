// Este script JavaScript realiza diversas operaciones relacionadas con la manipulación
// de formularios y la comunicación asíncrona con un servidor mediante AJAX.

// Función para enviar se encarga de obtener los valores del formulario, validarlos y realizar una solicitud AJAX al servidor para guardar los datos.
function enviar() {
  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const ciudad = document.getElementById("ciudad").value;

  // Validar el formulario antes de realizar la solicitud AJAX
  if (!validarFormulario()) {
      console.log("Formulario no válido. No se realizará la solicitud AJAX.");
      return false;
  }

  // Construir URL con parámetros
  const url = `/DAW/CLIENTE/xxx_Examen_js/ajax/3/check.py?nombre=${encodeURIComponent(nombre)}&edad=${encodeURIComponent(edad)}&ciudad=${encodeURIComponent(ciudad)}`;

  // Realizar solicitud AJAX
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // Después de guardar los datos, mostrar la tabla actualizada
          mostrarTabla();
      } else {
          console.log(`Estado: ${this.readyState}, Respuesta del servidor: ${this.status}`);
      }
  };

  httpRequest.open("GET", url, true);
  httpRequest.send();

  // Evitar que el formulario se envíe normalmente
  return false;
}

// Valida los campos del formulario y resalta en rojo aquellos que no cumplen con los requisitos.
function validarFormulario() {
  // Función para validar el formulario
  let esValido = true;

  // Obtener elementos del formulario
  const nombreInput = document.getElementById("nombre");
  const edadInput = document.getElementById("edad");
  const ciudadInput = document.getElementById("ciudad");

  // Validar los campos
  const campos = [nombreInput, edadInput, ciudadInput];
  for (const campo of campos) {
      if (campo.value === null || campo.value === "") {
          campo.style.background = "red";
          esValido = false;
      }
  }

  return esValido;
}

//  Realiza una solicitud AJAX para obtener datos del servidor y llama a la función crearTabla para mostrar los datos en una tabla HTML.
function mostrarTabla() {
  const httpRequest = new XMLHttpRequest();

  httpRequest.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          // Cuando la solicitud AJAX se completa con éxito, parsea los datos
          // JSON y llama a la función para crear la tabla.
          const datos = JSON.parse(this.responseText);
          crearTabla(datos);
      } else {
          console.log(`Estado: ${this.readyState}, Respuesta del servidor: ${this.status}`);
      }
  };

  // Realizar una solicitud AJAX para obtener los datos del servidor
  httpRequest.open("GET", "/DAW/CLIENTE/xxx_Examen_js/ajax/3/yoo.py", true);
  httpRequest.send();
}

// Recibe los datos, crea una tabla HTML y la muestra en el contenedor designado.
function crearTabla(datos) {
  const contenedor = document.getElementById("tablaContenedor");

  // Crear una tabla y agregar los datos recibidos
  let tabla = document.createElement("table");
  let filaCabecera = document.createElement("tr");

  // Establecer la cabecera de la tabla
  filaCabecera.innerHTML = "<th>Nombre</th><th>Edad</th><th>Ciudad</th>";
  tabla.appendChild(filaCabecera);

  // Iterar sobre los datos para crear las filas de la tabla
  datos.forEach(function (elemento) {
      let filaDatos = document.createElement("tr");

      // Iterar sobre las claves del objeto para crear las celdas de la fila
      for (let clave in elemento) {
          let td = document.createElement("td");
          td.appendChild(document.createTextNode(elemento[clave]));
          filaDatos.appendChild(td);
      }

      // Agregar la fila a la tabla
      tabla.appendChild(filaDatos);
  });

  // Mostrar la tabla en el contenedor
  contenedor.innerHTML = "";
  contenedor.appendChild(tabla);
}
