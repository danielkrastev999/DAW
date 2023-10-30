onload=inicio;

let canvas;
let context;
let ancho;
let largo;
let jugador = 0;
let numJugadas = 0;
let partidaFinalizada = false;

function inicio(argument){
    canvas = document.getElementById("miCanvas");
    context = canvas.getContext("2d");

    ancho = canvas.width;
    largo = canvas.height;

    pintarTablero();

    //  Evento para capturar los clicks en el canvas
    canvas.addEventListener('click',function(event){jugada(event)})
}

function pintarTablero(){
    //  Crear un rectangulo relleno de color gris
    //  2 primeros parametros: esquina arriba-izquierda | 2 ultimos: ancho y alto del rectangulo
    context.fillStyle = 'grey';
    context.fillRect(0,0,ancho,largo)
    
    //  Crea 9 circulos blancos
    let color = 'white';
    for(xCentro of [100,300,500]){
        for(yCentro of [100,300,500]){
            pintaCirculo(xCentro,yCentro,color);
        }
    }
}

function pintaCirculo(xCentro,yCentro,color){
    //  Crear un circulo con los primeros parámetros coordenadas del centro, radio, inicio y fin del arco
    context.beginPath();
    context.fillStyle = color;
    context.arc(xCentro,yCentro,90,0,Math.PI*2);
    context.closePath();
    context.fill();
}

function jugada(evento){
    let x = Math.floor(evento.clientX - canvas.getBoundingClientRect().left); //    Obtiene la coordenada X donde pulso el jugador en el canvas
    let y = Math.floor(evento.clientY - canvas.getBoundingClientRect().top);//      Obtiene la coordenada Y donde pulso el jugador en el canvas
    
    numJugadas++;
    
    console.log("X: "+ x + " -  Y: " + y);
    console.log("---------------------------------------");
    
    console.log("JUGADOR "+jugador);
    console.log("Numero de jugada: "+numJugadas);

    let posX = x/100;
    console.log(posX);

    let posY = y/100;
    console.log(posY);

    console.log("---------------------------------------");

    if (posX >= 0 && posX <= 2){
        if(posY >= 0 && posY <= 2){ //circulo arriba izquierda
            if (jugador == 1){
                pintaCirculo(100,100,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(100,100,'#004D98')
                jugador = 1;
            }
            
        }
        else if(posY >= 2 && posY <= 4){
            if (jugador == 1){
                pintaCirculo(100,300,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(100,300,'#004D98')
                jugador = 1;
            }
        }
        else if(posY >= 5 && posY <= 7){
            if (jugador == 1){
                pintaCirculo(100,500,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(100,500,'#004D98')
                jugador = 1;
            }
        }
    }
    else if (posX >= 2 && posX <= 4){
        if(posY >= 0 && posY <= 2){ //circulo arriba izquierda
            if (jugador == 1){
                pintaCirculo(300,100,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(300,100,'#004D98')
                jugador = 1;
            }
        }
        else if(posY >= 2 && posY <= 4){
            if (jugador == 1){
                pintaCirculo(300,300,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(300,300,'#004D98')
                jugador = 1;
            }
        }
        else if(posY >= 5 && posY <= 7){
            if (jugador == 1){
                pintaCirculo(300,500,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(300,500,'#004D98')
                jugador = 1;
            }
        }
    }
    else if (posX >= 5 && posX <= 7){
        if(posY >= 0 && posY <= 2){ //circulo arriba izquierda
            if (jugador == 1){
                pintaCirculo(500,100,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(500,100,'#004D98')
                jugador = 1;
            }
        }
        else if(posY >= 2 && posY <= 4){
            if (jugador == 1){
                pintaCirculo(500,300,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(500,300,'#004D98')
                jugador = 1;
            }
        }
        else if(posY >= 5 && posY <= 7){
            if (jugador == 1){
                pintaCirculo(500,500,'#A50044')
                jugador = 0;
            }
            else{
                pintaCirculo(500,500,'#004D98')
                jugador = 1;
            }
        }
    }

    if (numJugadas >= 5){
        if(hayGanador()){
            //mensaje de final de partida
            partidaFinalizada = true
        }
        else if (numJugadas == 9){
            //empate
            partidaFinalizada = true
        }
    }
    console.log("no has ganado todavia");
    hayGanador(posX,posY)

}

function hayGanador(posX,posY){


    if ((posX >= 0 && posX <= 2) && (posY >= 0 && posY <= 2)){
        if((posX >= 0 && posX <= 2) && (posY >= 3 && posY <= 5)){
            if ((posX >= 0 && posX <= 2) && (posY >= 5 && posY <= 7)){
                console.log("has ganado");
            }
        }
    }
}




// si es 0 o 1 la coordenada es 100