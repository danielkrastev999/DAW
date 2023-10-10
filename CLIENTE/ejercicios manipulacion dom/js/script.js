//let cuerpo = document.getElementsByTagName("body")[0];
let contadorLista = 0; //   Contador para la lista
let contadorTam = 0; //     Contador para cambiar el tamaño a la fuente
let oculto = false; //      Inicializo oculto en false

function getParagraph() {
    let inputParrafo = document.getElementById("inputParrafo").value; //    Guardo el texto del input en la varible inputParrafo
    let miDiv = document.getElementById("miDiv"); //    Le doy a miDiv el elemento que tiene el id miDiv del html
    let parrafo = document.createElement("p"); //   Creo un elemento parrafo

    parrafo.innerHTML = inputParrafo; //    Añado en parrafo el texto del input
    miDiv.appendChild(parrafo); //  Añado parrafo a miDiv y asi poder mostrarlo
}

function getList() {
    contadorLista++; // Cada vez que se clicka en el boton aumenta el contador y asi puedo numerar los li de la ul
    let miLista = document.getElementById("miLista"); //    Guardo en miLista el elemento con id miLista del html
    let li = document.createElement("li"); //   Creo elementos li 
    let textoLi = "Elemento de la lista " + contadorLista; //   Texto que contendrá cada li

    li.innerHTML = textoLi; //  Escribo en el li el texto del textoLi
    miLista.appendChild(li); // Añado los li a miLista que es la ul en el html
}

function getLink() {
    let miDiv2 = document.getElementById("miDiv2"); //    Guardo en miDiv2 el elemento con id miDiv2 del html
    let parrafo = document.createElement("p"); //   Creo un parrafo
    let enlace = document.createElement("a"); //    Creo un elemento "a" para crear el enlace
    enlace.setAttribute("href", "https://www.w3schools.com/"); //   Le doy el atributo href
    parrafo.textContent = "Visitar w3school"; // El texto que aparecerá y que al clickar te llevara a w3school

    enlace.appendChild(parrafo); // Añado el elemento parrafo al enlace
    miDiv2.appendChild(enlace); //  Añado el elemento enlace a miDiv2
}

function changeColor(){
    let miElemento = document.getElementById("miElemento"); //  Guardo en miElemento el elemento con id miElemento del html
	let simbolos = "0123456789ABCDEF"; //   Creo un string con todos los numeros y letras hexadecimales para sacar el color a continuacion
	let color = "#"; // Creo una variable color con un # de valor porque los colores hexa empiezan con #

	for(let i = 0; i < 6; i++){ //  Un for que dara la vuelta 6 veces, el numero de caracteres en los colores hexadecimales
		color = color + simbolos[Math.floor(Math.random() * 16)]; //    Saco uno de ellos con el random y lo trunco con floor
        // a continuacion, lo añado a la variable que contenia #. Ej a la primera vuelta: #4, segunda #49, tercera #49F...
	}
    miElemento.style.margin = "2em"; // Doy 2em de margen al elemento 
    miElemento.textContent = color; //  Le añadimos el texto del color para que se pueda ver
    miElemento.style.backgroundColor = color; // le damos al background del elemento el color aleatorio
}

function changeFontSize(){
    let miTexto = document.getElementById("miTexto");//  Guardo en miTexto el elemento con id miTexto del html

    if (contadorTam == 0){ //   Si el contador es 0 (default), se pone en 10px el tamaño del texto
        miTexto.style.fontSize = "10px"
        contadorTam++; //   Sumamos 1 al contador

    }
    else if(contadorTam == 1){ //   Si el contador es 1, se pone en 20px el tamaño del texto
        miTexto.style.fontSize = "20px"
        contadorTam++; //   Sumamos 1 al contador
    }
    else if(contadorTam == 2){ //   Si el contador es 2, se pone en 30px el tamaño del texto
        miTexto.style.fontSize = "30px"
        contadorTam = 0; // Ponemos el contador a cero para que al siguiente click vuelva a 10px
    }
}


function getOpacity(){
    let elementoOculto = document.getElementById("elementoOculto"); //  Guardo en elementoOculto el elemento con id elementoOculto del html
 
    //  Recordatorio ! oculto = false
    if(oculto){ //  Si oculto == true
        elementoOculto.style.opacity = "100%"; //   Opacidad al 100% y desaparece
        oculto = false; //  Y cambiamos el valor a false 
    }else if(oculto == false){ //   Si oculto == false
        elementoOculto.style.opacity = "0%"; //C    ambiamos la opacidad al 0% y aparece
        oculto = true; //   Asignamos true al valor de la variable controladora 
    }

}

//  Funcion que solo se ejecuta cuando el mouse pasa por encima
function changeParagraphColor(){
    let textoCambiante = document.getElementById("textoCambiante") ;//  Guardo en textoCambiante el elemento con id textoCambiante del html
        textoCambiante.style.color = 'BlueViolet';  //  le cambio el color  al parrafo
    
    //  Funcion interna que se ejecuta cuando el mouse se va fuera del parrafo
    textoCambiante.onmouseout = function(){
        textoCambiante.style.color = 'maroon';  // cambia el color al original
    }
}