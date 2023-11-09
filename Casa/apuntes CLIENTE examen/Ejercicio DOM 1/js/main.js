window.onload = function() {
	// Numero de enlaces de la pagina

    let numEnlaces = document.getElementById("numEnlaces");
    let enlaces  = document.querySelectorAll("a");

    numEnlaces.innerHTML = "Hay un total de: "+enlaces.length+" enlaces"

    //------------------------------------------------------
	// Direccion del penultimo enlace

    let dirPenEnlace = document.getElementById("dirPenEnlace");
    let penultimoEnlace = enlaces[enlaces.length - 2]

    dirPenEnlace.innerHTML = "La direccion del penultimo enlace es: "+penultimoEnlace

    //------------------------------------------------------
	// Numero de enlaces que apuntan a http://prueba
    
    let numEnlacesApuntanAPrueba = document.getElementById("numEnlacesApuntanAPrueba");
    let cont = 0

    for(let i of enlaces){
        let atb = i.getAttribute("href")
        console.log(atb);
        if(atb == "http://prueba"){
            cont++
        }
        console.log(cont);
    }

    numEnlacesApuntanAPrueba.innerHTML = "El numero de enlaces que enlazan a http://prueba son: "+cont
    
    //------------------------------------------------------
	// Numero de enlaces del tercer p�rrafo
    let numEnlacesTercerParrafo = document.getElementById("numEnlacesTercerParrafo");

    let body = document.querySelector("body");

    let parrafos = body.getElementsByTagName("p")

    let tercerParrafo = parrafos[2]

    let enlacesTotales = tercerParrafo.getElementsByTagName("a")
    
    console.log(enlacesTotales);
    numEnlacesTercerParrafo.innerHTML = "En el tercer parrafo hay un total de "+cont+" enlaces"


}