//OBJETO que contiene la informacion de la partida
//tablero -> array
//turno -> int
//numero de fichas jugadas -> int

let datos = new Map();
let datosRecuperados;
// Array para almacenar las jugadas
let jugadas = [];  
// Array para almacenar las jugadas eliminadas
let jugadasEliminadas = [];  




// Función para inicializar el juego
function inicializarJuego() {
    document.getElementById("anteriorBtn").disabled = true
    document.getElementById("siguienteBtn").disabled = true

    if (localStorage.getItem("miJuego")) {
        // Recuperar el objeto juego completo desde el localStorage
        juego = JSON.parse(localStorage.getItem("miJuego"));

        console.log(juego);

        // Pintar el contenido de juego.tablero si hay algo
        for (let i = 0; i < juego.tablero.length; i++) {
            // Guardar el elemento que está en el botón+i
            let bot = document.getElementById("boton" + i);

            // Pintar el contenido del juego.tablero en el botón
            bot.innerHTML = juego.tablero[i];

            // Verificar si el botón ya está pintado
            if (bot.innerHTML !== "") {
                bot.disabled = true;
            }
        }
    } else {
        // Si no hay datos en el localStorage, inicializar juego con valores predeterminados
        juego = {
            tablero: ["", "", "", "", "", "", "", "", ""],
            turno: 1,
            numFich: 0,
            partidaFinalizada: false
        };
    }
}


// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", inicializarJuego);


function jugar(bot,pos){
    // Aumentar el numero de fichas jugadas
    juego.numFich++;
    console.log(juego.numFich);

    // Si el turno es 1 pintar 'x' sino 'o'
    if(juego.turno == 1){
        bot.innerHTML = "X";
        juego.tablero[pos] = "X"
    }
    else {
        bot.innerHTML = "O";    
        juego.tablero[pos] = "O"
    }

    // Descativo el boton si se pulsa
    bot.disabled = true;

    // Guardar la jugada en el array
    jugadas.push(JSON.parse(JSON.stringify(juego)));
    // Limpiar el array de jugadas eliminadas
    jugadasEliminadas = [];
    

    
    //  Evaluar si en la jugada se hizo el tres en raya
    //      se comprueba a partir de la quita ficha
    if(juego.numFich >= 5){
        if(hayGanador()){ 
            document.getElementById("salida").innerHTML = "El ganador es el jugador "+juego.turno;
            juego.partidaFinalizada = true;

        } else if (juego.numFich == 9){
            
            document.getElementById("salida").innerHTML = "Empate"
            juego.partidaFinalizada = true;
        }
    }


    // Si la partida no esta finalizada, cambio el turno
    if(!juego.partidaFinalizada){
        //cambios de turno 
        if(juego.turno == 1){
            juego.turno = 2;
        }
        else{
            juego.turno = 1;
        }
        
    }

    // Creo un localStorage con clave 'miJuego' que contiene el objeto 'juego'
    localStorage.setItem("miJuego", JSON.stringify(juego));

}

function siguiente() {
    // Comprobar si hay jugada siguiente mirando si la longitud del array es mayor que 0
    if (jugadasEliminadas.length > 0) {
        // Recuperar la última jugada eliminada y cargarla en el objeto juego
        jugadas.push(jugadasEliminadas.pop());
        juego = JSON.parse(JSON.stringify(jugadas[jugadas.length - 1]));
        actualizarTablero();
    }

    // Desactivar el botón si no hay jugadas siguientes
    document.getElementById("siguienteBtn").disabled = (jugadasEliminadas.length === 0);
    document.getElementById("anteriorBtn").disabled = false
}

function anterior() {
    // Comprobar si hay jugadas anteriores disponibles
    if (jugadas.length > 1) {
        // Retirar la última jugada y cargarla en el objeto juego
        jugadasEliminadas.push(jugadas.pop());
        juego = JSON.parse(JSON.stringify(jugadas[jugadas.length - 1]));
        actualizarTablero();
    }

    // Desactivar el botón si no hay jugadas anteriores
    document.getElementById("anteriorBtn").disabled = (jugadas.length <= 1);
    document.getElementById("siguienteBtn").disabled = false
}



function actualizarTablero() {
    // Actualizar el contenido del tablero basado en el objeto juego
    for (let i = 0; i < juego.tablero.length; i++) {
        let bot = document.getElementById("boton" + i);
        bot.innerHTML = juego.tablero[i];
        if (bot.innerHTML !== "") {
            bot.disabled = true;
        }
    }


}


function reiniciar(){
    juego.tablero = ["","","","","","","","",""];
    juego.turno = 1;
    juego.numFich = 0;
    juego.partidaFinalizada = false;
    document.getElementById("salida").innerHTML = ""
    localStorage.removeItem("miJuego");

    document.getElementById("anteriorBtn").disabled = true
    document.getElementById("siguienteBtn").disabled = true


    // bucle para vaciar el contneido de los botones y ponerlos enable otra vez
    for (let b of document.getElementsByClassName('boton')){
        b.innerHTML = "";
        b.disabled = false;
    }
}

function hayGanador() {
    // Comprobar todas las combinaciones posibles para determinar si hay un ganador
    const combinacionesGanadoras = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columnas
        [0, 4, 8], [2, 4, 6]              // Diagonales
    ];

    for (const combinacion of combinacionesGanadoras) {
        const [a, b, c] = combinacion;
        if (juego.tablero[a] !== "" && juego.tablero[a] === juego.tablero[b] && juego.tablero[b] === juego.tablero[c]) {
            // Desactivar todos los botones y habilitar los botones de anterior y siguiente
            for (let b of document.getElementsByClassName('boton')) {
                b.disabled = true;
            }
            document.getElementById("anteriorBtn").disabled = false;
            document.getElementById("siguienteBtn").disabled = false;
            return true;
        }

        if (juego.numFich == 9){
            document.getElementById("anteriorBtn").disabled = false;
            document.getElementById("siguienteBtn").disabled = false;
        }
    }
    
    return false;
}
