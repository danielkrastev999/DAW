let contadorLista = 0;
let controlFontSize = 0;
let controlOpacidad = true;
let cuerpo = document.getElementsByTagName("body")[0];

function getParagraph(){
    let miDiv = document.getElementById("miDiv");
    let parrafo = document.createElement("p");
    let inputParrafo = document.getElementById("inputParrafo").value;

    if (inputParrafo != ""){

        parrafo.innerHTML = inputParrafo;
        miDiv.appendChild(parrafo);

    } else {
        alert("empty input, plz write something");
    }
}

function getList(){
    contadorLista++;
    let miLista = document.getElementById("miLista");
    let elementosLista = document.createElement("li");
    let textoLista = "Elemento de la lista "+ contadorLista;
    
    elementosLista.innerHTML = textoLista;
    miLista.appendChild(elementosLista);
}

<<<<<<< HEAD
function getLink(){
    let miDiv2 = document.getElementById("miDiv2");

    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://www.w3schools.com/");

    let parrafo = document.createElement("p");
    parrafo = "Visitar w3school ";

    enlace.innerHTML = parrafo;
    miDiv2.appendChild(enlace);
=======
function getLink() {
    let miDiv2 = document.getElementById("miDiv2"); //    Guardo en miDiv2 el elemento con id miDiv2 del html
    let parrafo = document.createElement("p"); //   Creo un parrafo
    let enlace = document.createElement("a"); //    Creo un elemento "a" para crear el enlace
    enlace.setAttribute("href", "https://www.w3schools.com/"); //   Le doy el atributo href
    parrafo.textContent = "Visitar w3school"; // El texto que aparecerá y que al clickar te llevara a w3school
>>>>>>> ccc17c0d69003c407353d9bd3ba9d10af6dc100c

}

function changeColor(){
    
    let miElemento = document.getElementById("miElemento");
    let simbolos = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++){
        color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    miElemento.textContent = color;
    miElemento.style.background = color;
    miElemento.style.margin = "2em";
}

function changeFontSize(){
    let miTexto = document.getElementById("miTexto");

    if(controlFontSize == 0){
        miTexto.style.fontSize = "10px";
        controlFontSize++;
    }
    else if (controlFontSize == 1){
        miTexto.style.fontSize = "20px";
        controlFontSize++;
    }
    else if (controlFontSize == 2){
        miTexto.style.fontSize = "30px";
        controlFontSize = 0;
    }
}

function getOpacity(){
    let elementoOculto = document.getElementById("elementoOculto");

    if (controlOpacidad){
        elementoOculto.style.opacity = "0%";
        controlOpacidad = false;
    }
    else if (controlOpacidad == false){
        elementoOculto.style.opacity = "100%"
        controlOpacidad = true;
    }
}

<<<<<<< HEAD
function changeFontColor(){
    let textoCambiante = document.getElementById("textoCambiante");

    textoCambiante.style.color = "BlueViolet";

    textoCambiante.onmouseout = function(){
        textoCambiante.style.color = "maroon";
=======
//  Funcion que solo se ejecuta cuando el mouse pasa por encima
function changeParagraphColor(){
    let textoCambiante = document.getElementById("textoCambiante") ;//  Guardo en textoCambiante el elemento con id textoCambiante del html
        textoCambiante.style.color = 'BlueViolet';  //  le cambio el color  al parrafo
    
    //  Funcion interna que se ejecuta cuando el mouse se va fuera del parrafo
    textoCambiante.onmouseout = function(){
        textoCambiante.style.color = 'maroon';  // cambia el color al original
>>>>>>> ccc17c0d69003c407353d9bd3ba9d10af6dc100c
    }

}