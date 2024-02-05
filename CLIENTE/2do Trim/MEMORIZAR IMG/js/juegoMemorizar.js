
// Crear un array con el nombre de las imagenes
const fotos = ["align-horizontal", "align-horizontal", "align-right", "align-right", "align-vertical", "align-vertical"];
let bloquearClic = false;

function inicializarJuego() {
    // Remover el array de fotos para que se coloquen de forma aleatoria
    fotos.sort(() => Math.random() - 0.5);

    // Eliminar todo el contenido dentro de la clase 'tablero'
    $(".tablero").empty();

    // Recorremos el array de fotos y creamos un div por cada elemento del mismo y le añadimos la clase 'item'
    for (let i = 0; i < fotos.length; i++) {
        let tarjeta = $("<div>");
        tarjeta.addClass("item");

        // Crear una etiqueta 'img' que ira dentro del div
        let imagen = $("<img>");
        // Le añadimos el atributo src y le pasamos la ruta de donde se encuentran las imagenes SVG
        imagen.attr("src", "img/" + fotos[i] + ".svg"); 
        // Añadimos la imagen a la tarjeta
        tarjeta.append(imagen);
        // Añadimos la tarjeta al tablero
        $(".tablero").append(tarjeta);
    }

    $(".item").click(function () {
        // Evitar múltiples clics mientras se procesan las tarjetas
        if (bloquearClic) {
            return;
        }
        // Añadimos la clase tarjetaAbierta a la tarjeta sobre la que se hace click
        $(this).addClass("tarjetaAbierta");

        setTimeout(function () {
            // Comprueba que hay mas de una tarjetaAbierta
            if ($(".tarjetaAbierta").length > 1) {
                // Guardamos las tarjetas con la clase 'tarjetaAbierta'
                let $tarjetasAbiertas = $(".tarjetaAbierta");

                // Comparar las rutas de las imágenes
                if ($tarjetasAbiertas.eq(0).find("img").attr("src") === $tarjetasAbiertas.eq(1).find("img").attr("src")) {
                    // Si las rutas de las imágenes son iguales, agregar la clase 'tarjetaMatch' a ambas tarjetas
                    $tarjetasAbiertas.eq(0).addClass("tarjetaMatch confirmacion");
                    $tarjetasAbiertas.eq(1).addClass("tarjetaMatch confirmacion");

                    // Eliminar la clase 'tarjetaAbierta' de ambas tarjetas
                    $tarjetasAbiertas.removeClass("tarjetaAbierta");

                    // Verificar si todas las tarjetas tienen la clase 'tarjetaMatch'
                    if ($(".tarjetaMatch").length == fotos.length) {
                        $(".resultado").text("¡gg, you win!");
                    }
                // Eliminar la clase 'tarjetaAbierta' de las tarjetas
                } else {
                    $tarjetasAbiertas.removeClass("tarjetaAbierta");
                }
            }

            // Desbloquear clic después de procesar las tarjetas
            bloquearClic = false;
        }, 500);

        // Bloquear clic mientras se procesan las tarjetas
        bloquearClic = true;
    });
}

// Inicializar el juego al cargar la página
inicializarJuego();



// Agregar evento click al botón de reset utilizando jQuery
$("#resetButton").click(function () {
    $(".resultado").text("");
    // Cerrar tarjetas abiertas
    $(".tarjetaAbierta").removeClass("tarjetaAbierta"); 
    // Limpiar tarjetas match
    $(".tarjetaMatch").removeClass("tarjetaMatch"); 
    // Reiniciar el juego
    inicializarJuego();
});
