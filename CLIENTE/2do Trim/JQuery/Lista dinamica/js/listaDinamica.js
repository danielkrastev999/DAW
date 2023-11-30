// Creamos un contador que empieza en 2 porque tenemos dos elementos ya en el html
let cont = 2

$("#boton").click(function(){
    cont++
    // Crear el elemento
    let elemento = $("<li>") 

    // Comprobar si el textfield esta vacio y si lo esta ponemos un texto predeterminado 
    if ($("#textfield").val() == "") {
        elemento.text("Elemento "+cont)
    }
    // Si tenemos contenido, añadimos este a la lista
    else{
        elemento.text($("#textfield").val())
    }
    
    // Añadimos el 'li' al 'ul'
    $("ul").append(elemento)
    elemento.hide().fadeIn(1000)

    //  Eliminar el elemento 'li' sobre el que se hace click
    $("li").click(function(event) {
        $(this).remove();
        
    }); 
})


    