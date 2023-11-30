let dibujo = 1;

function cambiaImagen(){
    console.log("cambia la imagen");
    
    dibujo++;
    //dibujo > 7 ? dibujo=1:
    if (dibujo > 7){
        dibujo = 1;
    }
    
    document.getElementById("imgJuego").src="imagenes/ahorcado"+dibujo+".png";
}