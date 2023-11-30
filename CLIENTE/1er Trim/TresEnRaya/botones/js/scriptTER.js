//OBJETO que contiene la informacion de la partida
//tablero -> array
//turno -> int
//numero de fichas jugadas -> int

// Guardamos toda la informacion en un objeto juego
const juego = {
    tablero : ["","","","","","","","",""],
    turno : 1,
    numFich : 0,
    partidaFinalizada : false
}


function jugar(bot,pos){

    //  Aumentar el numero de fichas jugadas
    juego.numFich++;
    console.log(juego.numFich);

    if(juego.turno == 1){
        bot.innerHTML = "X";
        juego.tablero[pos] = "X"
    }
    else {
        bot.innerHTML = "O";    
        juego.tablero[pos] = "O"
    }

    //  descativo el boton si se pulsa
    bot.disabled = true;


    //  evaluar si en la jugada se hizo el tres en raya
    //  se comprueba a partir de la quita ficha
    if(juego.numFich >= 5){
        if(hayGanador()){ 
            document.getElementById("salida").innerHTML = "El ganador es el jugador "+juego.turno;
            juego.partidaFinalizada = true;

        } else if (juego.numFich == 9){
            
            document.getElementById("salida").innerHTML = "Empate"
            juego.partidaFinalizada = true;
        }
    }


    if(!juego.partidaFinalizada){
        //cambios de turno 
        if(juego.turno == 1){
            juego.turno = 2;
        }
        else{
            juego.turno = 1;
        }
        
    }

}


function reiniciar(){
    juego.tablero = ["","","","","","","","",""];
    juego.turno = 1;
    juego.numFich = 0;
    juego.partidaFinalizada = false;

    // bucle para vaciar el contneido de los botones y ponerlos enable otra vez
    for (let b of document.getElementsByClassName('boton')){
        b.innerHTML = "";
        b.disabled = false;
    }
}

function hayGanador(){

    //todas las filas
    if(juego.tablero[0] != "" && juego.tablero[0] == juego.tablero[1] && juego.tablero[1] == juego.tablero[2]){
        return true;
    }
    if(juego.tablero[3] != "" && juego.tablero[3] == juego.tablero[4] && juego.tablero[4] == juego.tablero[5]){
        return true;
    }
    if(juego.tablero[6] != "" && juego.tablero[6] == juego.tablero[7] && juego.tablero[7] == juego.tablero[8]){
        return true;
    }

    //todas las columnas
    if(juego.tablero[0] != "" && juego.tablero[0] == juego.tablero[3] && juego.tablero[3] == juego.tablero[6]){
        return true;
    }
    if(juego.tablero[1] != "" && juego.tablero[1] == juego.tablero[4] && juego.tablero[4] == juego.tablero[7]){
        return true;
    }
    if(juego.tablero[2] != "" && juego.tablero[2] == juego.tablero[5] && juego.tablero[5] == juego.tablero[8]){
        return true;
    }

    //todas las diagonales
    if(juego.tablero[0] != "" && juego.tablero[0] == juego.tablero[4] && juego.tablero[4] == juego.tablero[8]){
        return true;
    }
    if(juego.tablero[2] != "" && juego.tablero[2] == juego.tablero[4] && juego.tablero[4] == juego.tablero[6]){
        return true;
    }


    return false;
}