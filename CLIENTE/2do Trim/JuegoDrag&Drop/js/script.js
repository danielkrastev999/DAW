// Se ejecuta cuando se inicia el arrastre
function arrastrando(event) {
    console.log(event.target.id);

    event
        .dataTransfer
        .setData('text/plain', event.target.id); 

}
// Se ejecuta cuando un elemento arrastrado se coloca sobre una zona de soltar
function recibiendo(event) {
    event.preventDefault();
    console.log(event.target.id);
}

// Se ejecuta cuando se suelta un elemento arrastrado sobre una zona de soltar
function soltar(event){
    // Obtengo el id del elemento que estoy soltando
    const id = event.dataTransfer.getData('text')

    console.log("soltar: " +id);
    console.log("destino: "+event.target.id);

    let objQueArrastro = $("#"+id)
    let destino  = $("#"+event.target.id)

    // Muevo el elemento arrastrado al destino
    destino.append(objQueArrastro)

}

// Verifico si se ha completado correctamente la ordenación de los elementos
function comprobar() {
    let ordenCorrecto = true;
    const valores = [];
    const cantidadElementos = $('.dropzone').length;

     // Comprobacion de si se han rellenado todas las casillas
     let algunaDropzoneVacia = false;
     $('.dropzone').each(function () {
         const contenidoTexto = $(this).children().text().trim();
         if (contenidoTexto === "") {
             algunaDropzoneVacia = true;
             // Salir del bucle each
             return false; 
         }
     });
     // Si alguna casilla está vacía, muestro un mensaje durante 2 segundos y despues lo quito 
     if (algunaDropzoneVacia) {
        $("#salida").text("Por favor, arrastra todas las casillas para comprobar :)").css("color", "#CC2936");
        setTimeout(function () {
            $("#salida").text("");
        }, 2000);
         return;
     }

    // Recorro las casillas de destino y obtengo los valores
    for (let i = 1; i <= cantidadElementos; i++) {
        const elementoDestino = $(`#destino-${i}`);
        const contenidoTexto = elementoDestino.children().text().trim();
        let valor;

        // Convierto el contenido a Int si es numerico
        if (isNaN(parseInt(contenidoTexto))) {
            valor = contenidoTexto;
        } else {
            valor = parseInt(contenidoTexto);
        }
        valores.push(valor);
    }

    console.log("El contenido del array es: " + valores);

    // Bucle para comprobar si los valores guardados en el array estan en orden ascendente
    for (let i = 0; i < valores.length - 1; i++) {
        console.log("_______________________");
        console.log(valores[i] + " > " + valores[i + 1] + ": ");
        console.log(valores[i] > valores[i + 1]);

        // Si el valor actual es mayor que el siguiente valor, el orden no es correcto y muestro un mensaje de error 
        if (valores[i] > valores[i + 1]) {
            ordenCorrecto = false;
            $("#salida").text("Orden incorrecto :( Prueba de nuevo").css("color", "#CC2936");
            setTimeout(function () {
                location.reload();
            }, 2000);
            return; 
        }
    }

    // Si el ordenCorrecto es true, muestro un mensaje de que todo esta bien y redirijo al siguiente nivel si hay mas
    if (ordenCorrecto) {
        $("#salida").text("Orden correcto !").css("color", "#00A86B");
        //  Si la longitud del array cantidadElementos es 2 significa que estamos en el primer nivel entonces, redirijo al siguiente, y asi con el siguiente tambien pero con 4
        if(cantidadElementos == 2){
            setTimeout(function () {
                location.href = "index2.html";
            }, 2000);
        }
        else if(cantidadElementos == 4){
            setTimeout(function () {
                location.href = "index3.html";
            }, 2000);
        }
        // Este al ser el ultimo nivel, muestro un mensaje de felicitacion por superar el juego durante 2 segundos y despues redirijo al primer nivel
        else if(cantidadElementos == 8){
            setTimeout(function () {
                $("#salida").text("ENHORABUENA ! TE HAS PASADO EL JUEGO (serás redirigido al comienzo)").css("color", "#00A86B");
                setTimeout(function () {
                    location.href = "index.html";
                }, 2000);
            }, 2000);
        }
    }
}


