 // Función para agregar un nuevo párrafo al cuerpo de la página
 function agregarParrafo() {
    // Crear un nuevo elemento <p>
    let nuevoParrafo = document.createElement("p");

    // Añadir texto al párrafo
    nuevoParrafo.textContent = "¡Este es un nuevo párrafo!";

    // Obtener el cuerpo del documento
    let cuerpo = document.body;

    // Añadir el nuevo párrafo al cuerpo de la página
    cuerpo.appendChild(nuevoParrafo);
  }