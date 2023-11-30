
$("#boton").click(function(){
    // Crear una imagen
    let img = $("<img>") 
    // Crear un input 
    let boton = $("<button>")
    // Añadirle un texto predeterminado al boton de cada imagen
    boton.text("Eliminar imagen")


    // Comprobar si el textfield esta vacio y si lo esta ponemos una imagen predeterminada
    if ($("#textfield").val() == "") {
        img.attr("src","https://www.ivertech.com/Articles/Images/KoalaBear200x200.jpg");
    }
    // En el caso de que tenga una url añadimos un atributo src a la imagen y de contenido el contenido del textfield
    else{
        img.attr("src",$("#textfield").val());
    }

    // Añadimos la clase .imagen a la imagen que creamos 
    img.addClass("imagen")

    // añadimos el boton y la imagen al div 'flex'
    $(".flex").append(img)
    $(".flex").append(boton)

    // Creamos un efecto para cuando aparece la imagen y el boton
    img.hide().fadeIn(1000)
    boton.hide().fadeIn(1000)

    // Funcion para que al clickar algun boton que corresponde a su imagen, se eliminen
    $(boton).click(function(event) {
        $(img).remove();
        $(boton).remove();
    }); 
});