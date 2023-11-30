onload=inicio

function inicio(){
    const canvas = document.getElementById("myCanvas");

    let ancho = canvas.width;
    let largo = canvas.height;

    // no se puede dibujar directamnete en el canvas
    //hay que meterlo en un contexto
    const contexto = canvas.getContext("2d");

    //dibujar diagonales en canvas
    //principal de color azul
    contexto.beginPath();
        contexto.lineWidth = 85;
        contexto.strokeStyle = "#004D98";
        //linea
        contexto.moveTo(0,0);
        contexto.lineTo(ancho,largo);
        //ejecutar
        contexto.stroke()
    contexto.closePath();

    //secundaria de color verde
    contexto.beginPath();
        contexto.strokeStyle = "#A50044"
        //linea
        contexto.moveTo(0,largo)
        contexto.lineTo(ancho,0)
        //ejecutar
        contexto.stroke()
    contexto.closePath();


    // Crear un rectangulo relleno de color. 
    //  Los dos primeros son las coordenadas de la esquina arriba izquierda
    //  Los dos ultimos son el ancho y el alto del rectangulo
    contexto.fillStyle = "#FFED02"
    contexto.fillRect(200,150,200,100)


    // Crear un rectangulo solo BORDE
    contexto.lineWidth = 1;
    contexto.strokeStyle = "#004D98";
    contexto.strokeRect(450,150,50,100)


    //Dibujar un circulo
    // le damos la coordenada del centro y el radio
    contexto.beginPath();
    contexto.strokeStyle = "#FFED02";
    contexto.arc(100,100,50,0,Math.PI*2); 
    contexto.stroke(); //borde
    contexto.fill(); //contenido
    contexto.closePath();
}
