let cnvs = document.getElementById("tablero");
let ctx = cnvs.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cnvs.width, cnvs.height);

// Definir el tamaño de la cuadrícula
let gridSize = 25;
let rows = cnvs.width / gridSize;
let cols = cnvs.height / gridSize;

let coordx = 275;
let coordy = 275;
let lado = gridSize;

let velocidad = 1;
let fps = 1000 / 10;

let direccion = null;

let puntos = 0;

let cabeza = {
    x: coordx,
    y: coordy
}

let snake = [];

snake.unshift(cabeza);


//inicio
ctx.fillStyle = "blue";
ctx.fillRect(coordx, coordy, lado, lado);


//colocar comida inicial
let coordXcomida = Math.floor(Math.random() * rows) * gridSize;
let coordYcomida = Math.floor(Math.random() * cols) * gridSize;

console.log(coordXcomida);
console.log(coordYcomida);

ctx.fillStyle = "red";
ctx.fillRect(coordXcomida, coordYcomida, lado, lado);

let temporizador;

function iniciarJuego() {
    temporizador = setInterval(redibuja, fps);
}

function redibuja() {

    coordx = snake[0].x;
    coordy = snake[0].y;

    ctx.fillStyle = "white";
    for (let trz of snake) {
        ctx.fillRect(trz.x, trz.y, lado, lado);
    }

    snake.pop();

    switch (direccion) {
        case "N":
            coordy -= velocidad * gridSize;
            break;
        case "S":
            coordy += velocidad * gridSize;
            break;
        case "O":
            coordx -= velocidad * gridSize;
            break;
        case "E":
            coordx += velocidad * gridSize;
            break;
    }

    let cabezaNueva = {
        x: coordx,
        y: coordy
    }

    snake.unshift(cabezaNueva);

    ctx.fillStyle = "blue";
    for (let trz of snake) {
        ctx.fillRect(trz.x, trz.y, lado, lado);
    }

    if (coordx >= cnvs.width || coordx < 0 || coordy >= cnvs.height || coordy < 0) {
        document.getElementById("pts").innerHTML = "Perdiste";
        clearInterval(temporizador);
        location.reload()
    }

    // COMPROBAR SI COMIÓ
    if (coordx === coordXcomida && coordy === coordYcomida) {
        comido();
    }

}

document.addEventListener("keydown", function (event) {

    switch (event.key) {
        case "w":
            direccion = "N";
            break;
        case "s":
            direccion = "S";
            break;
        case "a":
            direccion = "O";
            break;
        case "d":
            direccion = "E";
            break;
    }
});

function comido() {
    ctx.fillStyle = "white";
    ctx.fillRect(coordXcomida - 5, coordYcomida - 5, lado + 5, lado + 5);

    coordXcomida = Math.floor(Math.random() * rows) * gridSize;
    coordYcomida = Math.floor(Math.random() * cols) * gridSize;

    ctx.fillStyle = "red";
    ctx.fillRect(coordXcomida, coordYcomida, lado, lado);

    puntos = puntos + 10;
    document.getElementById("pts").innerHTML = "Puntos: " + puntos;



    let cuerpoNuevo = {
        x: snake[snake.length - 1].x,
        y: snake[snake.length - 1].y
    }

    
    snake.push(cuerpoNuevo)

}

// Iniciar el juego al cargar la página
iniciarJuego();
