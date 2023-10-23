
const words = ["ANIMAL", "MONITOR", "INTERESTELAR", "REPTILES", "MESSI", "ORIGINAL"];
let gameWord;
let playWord;
let actualWord;
let draw;
let lives;
let underscore;


function newGame() {
    draw = 1; //    para cada vez que empiece una partida, inicializo en 1 el dibujo 

    lives = 7; //   inicializo el numero de vidas con el que empiezas cada partida

    enableButtons()//   activo los botones por si no es la primera partida y han sido desactivados al terminar la anterior partida

    document.getElementById("gameImg").src = "imagenes/ahorcado" + draw + ".png"; //    pinto la primera imagen, en la que no hay nada del monigote

    gameWord = words[Math.floor(Math.random() * words.length)]; // generao una palabra aleatoria del array WORDS cada vez que le da al boton Partida Nueva 
    //o cuando actualizas la pagina
    
    actualWord = gameWord.split(""); // hago un split de la palabra por letras
    
    for (let i = 0; i < actualWord.length; i++) { //recorro la palabra y sustituyo cada caracter por una barra baja
        actualWord[i] = "_";
    }

    playWord = { word: gameWord, hiddenWord: actualWord }; // creo un objeto en el que por un lado tengo la palabra elegida del array 
    //y en el otro tengo la misma palabra pero con barras bajas

    update() // llamo al metodo update para pintar las barras bajas en el html
}


function checkWord(letter) { // el metodo recibe por parametro u argumento que es un string que llega desde el evento onclick en el html
    let letterFound = false; // variable para verificar si la letra fue encontrada en la palabra

    for (let i = 0; i < playWord.word.length; i++) { // bucle for que recorre la longitud de la palabra dentro del objeto playWord
        if (playWord.word[i] == letter) { //   si la letra de la palabra es igual a la letra traida por parametro
            playWord.hiddenWord[i] = letter; // la palara escondida, con el mismo indice (porque tienen la misma longitud) se cambia por la letra correcta
            // esto lo hace durante toda la letra, y si se repite la letra en la palabra, la añade las veces que sean necesarias
            letterFound = true; // cambiamos la variable de control a true
        }
    }

    if (letterFound) { //   si es true
        green(letter);//    entra en el metodo green pasandole de argumento la letra en si y en el metodo, deshabilita el boton y lo pone en verde
    } 
    else {
        red(letter); //     si no esta, y llega como false, hace lo mismo pero lo pone en rojo
        lives--; //         resta una vida
        changeImg();//      llama al metodo cambiar imagen y le suma 1 a draw, lo que hace que pone la imagen con la cabeza del ahorcado y asi..
    }

    update(); // actualiza el HTML después de cada interacción

    //  comprobar si el juego se ha ganado (sin barras bajas restantes)
    if (!playWord.hiddenWord.includes("_")) { //    si no existen barras bajas en la palabra escondida entonces significa que se ha ganado la partida
        underscore.innerHTML = "HAS GANADO ! LA PALABRA ERA: "+ playWord.word;
        desenableButtons()//    se deshabilitan los botones de las letras hasta que no le des a Partida nueva
        
    } else if (lives <= 1) { // si te quedas sin vidas
        underscore.innerHTML = "HAS PERDIDO :( LA PALABRA ERA: "+playWord.word; //    has perdido
        desenableButtons()//    se deshabilitan los botones de las letras hasta que no le des a Partida nueva
    }
}

function update(){
    underscore = document.getElementById("underscores"); 
    underscore.innerHTML = playWord.hiddenWord.join("  "); //   actualiza la palabra en el html 
}

function green(letter){
    let usedButton = document.getElementById(letter);

    usedButton.style.backgroundColor = "Green"; //  cambia a verde
    usedButton.disabled = true; //  deshabilita el boton
}

function red(letter){
    let usedButton = document.getElementById(letter);

    usedButton.style.backgroundColor = "red"; //    cambia a rojo
    usedButton.disabled = true;//   deshabilita el boton
}

function changeImg() {
    draw++; //  aumenta en 1 el dibujo 
    if (draw > 7) { //   cuando el dibujo sea mas que 7, lo vuelve a poner a 1
        draw = 1;
    }
    document.getElementById("gameImg").src = "imagenes/ahorcado" + draw + ".png"; // pinta el dibujo
}

<<<<<<< HEAD

function restartGameAfterDie() {
    enableButtons(); // llamamos a la funcion enableButtons que se encarga de poner los botones otra vez en activo
    newGame();
=======
function restartGameAfterDie() {//  Funcion que se llama cuando acaba el juego o cuando mueres
    enableButtons(); // Activa los botones
    newGame(); //       Empieza una nueva partida
>>>>>>> b0f8d6896b2cbc8dfd8fb6604408b4c61ca714fe
}

function enableButtons() {
    const buttons = document.querySelectorAll(".letter-button");
    
<<<<<<< HEAD
    buttons.forEach(button => {
        button.disabled = false; // ponemos el boton en false
        button.style.backgroundColor = ""; // Reset the button color
=======
    buttons.forEach(button => { //  Bucle for each que recorre todos los botones
        button.disabled = false;//  Activa los botones
        button.style.backgroundColor = ""; // Resetea el color de los botones
>>>>>>> b0f8d6896b2cbc8dfd8fb6604408b4c61ca714fe
    });
}

function desenableButtons() {
    const buttons = document.querySelectorAll(".letter-button");

    buttons.forEach(button => {
        button.disabled = true; //  Desactiva los botones
        button.style.backgroundColor = "grey"; // Pone todos los botones de color gris
    });
}
