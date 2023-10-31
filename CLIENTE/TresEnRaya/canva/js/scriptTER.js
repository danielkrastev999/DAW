onload=inicio;

let canvas;
let context;
let ancho;
let largo;
let jugador = 0;
let numJugadas = 0;
let partidaFinalizada = false;
let tablero = [ 
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ];

function inicio(argument) {
    canvas = document.getElementById("miCanvas")
    context = canvas.getContext("2d");

    ancho = canvas.width;
    largo = canvas.height;

    pintarTablero();

    // Evento para capturar los clicks en el canvas
    canvas.addEventListener('click', function (event) {
        jugada(event);
    });
}

function pintarTablero() {
    // Fondo del tablero (casi negro)
    context.fillStyle = '#222422'; // Establece el color de fondo casi negro
    context.fillRect(0, 0, ancho, largo);

    let color = 'white';
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            pintaCirculo(i, j, color);
        }
    }
}

function pintaCirculo(x, y, color) {
    context.beginPath();
    context.fillStyle = color;
    context.arc((100 + x * 200),(100 + y * 200), 90, 0, Math.PI * 2);
    context.closePath();
    context.fill();
}


function jugada(evento) {
    if (partidaFinalizada) {
        return; // No permitir más jugadas si la partida ha terminado
    }

    let x = Math.floor(evento.clientX - canvas.getBoundingClientRect().left);
    let y = Math.floor(evento.clientY - canvas.getBoundingClientRect().top);

    

    let posX = Math.floor(x / 200);
    let posY = Math.floor(y / 200);

    //  Si la casilla esta vacia..
    if (tablero[posY][posX] === 0) {// Verificar si la casilla está vacía
        tablero[posY][posX] = jugador + 1; // Marcar la casilla con el jugador actual
        
        numJugadas++;
        console.log("numero de jugada: "+ numJugadas);
        //   Comprobar que jugador es y pintar la casilla
        if (jugador === 0) {
            pintaCirculoJugador(posX, posY, '#A50044'); // Jugador 1
            jugador = 1; // Cambio de jugador
        } else {
            pintaEquisJugador(posX, posY, '#004D98'); // Jugador 2
            jugador = 0; // Cambio de jugador
        }
    } else {
        //numJugadas--;// Resto una jugada por si hace click en una casilla ocuopada
        return; // No permito una jugada nueva en una casilla ocupada
    }

    if (numJugadas >= 5) { //   Despues de la 4 jugada, empezamos a comprobar si hay ganador
        if (hayGanador()) { //  Si hay ganador es true
            //  Mostramos en la pantalla un mensaje con el jugador que ha ganado usando un operador ternario
            document.getElementById("resultado").innerHTML = "¡El jugador " + (jugador === 0 ? 2 : 1) + " ha ganado!";
            partidaFinalizada = true; //    Finalizamos la partida
        } else if (numJugadas === 9) { //   Si llegamos a 9 jugadas, se termina la partida
            document.getElementById("resultado").innerHTML = "¡Empate!";
            partidaFinalizada = true; //    Finalizamos la partida
        }
    }
}

function hayGanador() {
    // Comprobaciones de filas
    for (let i = 0; i < 3; i++) {
        //  La primera comprobacion es para saber que no hay casillas vacias
        //  Si en una fila, todas las posiciones son de un jugador, devuelvo true, osea que ya hay ganador
        if (tablero[i][0] !== 0 && tablero[i][0] === tablero[i][1] && tablero[i][0] === tablero[i][2]) {
            return true;
        }
    }

    // Comprobaciones de columnas
    for (let i = 0; i < 3; i++) {
        //  Si en todas las columnas... lo mismo que arriba
        if (tablero[0][i] !== 0 && tablero[0][i] === tablero[1][i] && tablero[0][i] === tablero[2][i]) {
            return true;
        }
    }

    // Comprobaciones de diagonales, lo mismo que en las anteriores pero estas individualmente 
    if (tablero[0][0] !== 0 && tablero[0][0] === tablero[1][1] && tablero[0][0] === tablero[2][2]) {
        return true;
    }
    if (tablero[0][2] !== 0 && tablero[0][2] === tablero[1][1] && tablero[0][2] === tablero[2][0]) {
        return true;
    }

    return false;
}

//  Dibujar O y X
function pintaCirculoJugador(x, y, color) {
    context.beginPath();
    context.strokeStyle = color; // Usamos strokeStyle para establecer el color del borde
    context.lineWidth = 20; // Establecemos el grosor del borde a 20
    context.arc(100 + x * 200, 100 + y * 200, 70, 0, Math.PI * 2); // Reducimos el radio a 70 para hacer el círculo más pequeño
    context.closePath();
    context.stroke(); // Usamos stroke en lugar de fill para pintar solo el borde
}

function pintaEquisJugador(x, y, color) {
    context.strokeStyle = color; // Usamos strokeStyle para establecer el color del borde
    context.lineWidth = 20; // Establecemos el grosor del borde a 20
    
    // Dibujar la primera línea de la equis
    context.beginPath();
    context.moveTo(100 + x * 200 - 60, 100 + y * 200 - 60);
    context.lineTo(100 + x * 200 + 60, 100 + y * 200 + 60);
    context.closePath();
    context.stroke();
    
    // Dibujar la segunda línea de la equis
    context.beginPath();
    context.moveTo(100 + x * 200 + 60, 100 + y * 200 - 60);
    context.lineTo(100 + x * 200 - 60, 100 + y * 200 + 60);
    context.closePath();
    context.stroke();
}