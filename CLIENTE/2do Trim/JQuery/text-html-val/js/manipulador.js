//  Nodos textos 
console.log($("p").text()) //Hello WRLD !

//  Contenido en HTML
console.log($("p").html()) //Hello WRLD !
console.log($("body").html()) //<p>Hello WRLD !</p>

/******************************************************/

$("p").text("<b>HOLA MUNDO</b>") // Cambiar el contenido del 'p' 
console.log($("p").text());

/******************************************************/

//  La funcion .text() no manipula el contenido, .html() si lo hace !
$("p").html("<b>HOLA MUNDO</b>")  // Pone el hola mundo en negrita
console.log($("p").html());

/******************************************************/ 

console.log($("input").val()); // 10
$("input").val("Araujo") // Cambiar el contenido del input
console.log($("input").val()); // Araujo

/******************************************************/ 

//  Cambiar propiedades css a los elementos seleccionados
//$("p").css("background","red")
//$("p").css("color","white")

// Ahora tenemos css incrustado en el html
$("p").addClass("verde")
$("p").addClass("amarillo")
$("p").removeClass("amarillo") // quita la clase amarillo

// toggle cambia entre quitar y poner, si la tiene te la quita y viceversa
$("p").toggleClass("amarillo") // amarillo
$("p").toggleClass("amarillo") // NO amarillo
$("p").toggleClass("amarillo") // amarillo

/******************************************************/ 

$("p").append(" OOOO OOO OO O") // añadir contenido al final del elemento seleccionado
// Hay 3 mas en la presentacion

/******************************************************/ 

// Crear un parpadeo en el 'p' 
$("p").fadeOut(1000)
$("p").fadeIn(1000)
// hay mas efectos y animaciones

/******************************************************/ 

//AJAX  (mas adelante)

/******************************************************/ 

//  Crear elementos del DOM

let elemento = $("<p>") // Crear el elemento
elemento.text("El contenido del parrafo añadido desde JS")
$("body").append(elemento)