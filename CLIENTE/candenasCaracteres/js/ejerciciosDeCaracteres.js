

function separarEnLineas(){
    let texto = document.getElementById("texto").value; 
    let salida = "";

    for (letra of texto){ //    array tipo for of para recorrer el string
        salida = salida + `<p>${letra}</p>` //  con cada letra se crea un elemento p
    }
    //  se crean los elementos p del DOM dentro del div salida1
    document.getElementById("salida1").innerHTML = salida;
}

function contarLetras(){
    let texto = document.getElementById("texto").value; 
    let counter = 0;

    for (letra of texto.toUpperCase()){
        if((letra>="A") && (letra<="Z")){
            counter += 1;
        }
    }
    document.getElementById("salida1").innerHTML = `El total de letras es ${counter}`;
}

function darVuelta(){
    let texto = document.getElementById("texto").value; 
    let salida = "";

    for(letra of texto){
        salida = letra + salida
    }
    document.getElementById("salida1").innerHTML = salida;
}

function buscarPalabra(){
    let texto = document.getElementById("texto").value; 
    let palabra = document.getElementById("palabra").value; 

    //  Variable con el elemento p de salida
    let salida = "<p>La palabra no existe</p>";

    if (buscarPa(texto,palabra)){ //    si la palabra esta dentro, cambio el mensaje de salida
        salida = "<p>La palabra existe</p>";
    }
    document.getElementById("salida1").innerHTML = salida;
}

function buscarPa(texto, palabra){
    //  Variable que va a contener el resultado de la busqueda
    //  true si esta la palabra, false si no esta
    let result = false;

    if (texto.indexOf(palabra) != -1){ //  indexOf devuelve -1 si no encunetra la palabra
        result = true;
    }

    return result;
}

function letrasEnFrase(){
    let texto = document.getElementById("texto").value; 
    let letra = document.getElementById("letra").value; 
    let counter = 0;

    if (letra.length != 1){
        alert("Error, pon 1 letra");
    }
    else{
        for(le of texto.toUpperCase()){
            if(le == letra){
                counter +=1;
            }
        }
    }
    document.getElementById("salida1").innerHTML = `El total de letras repetidas en la frase es:<b> ${counter} </b>`;
}

function contarVocales(){
    let texto = document.getElementById("texto").value; 

    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;

    for (letra of texto.toLowerCase()){
        switch(letra){
            case "a":
                a++;
                break;
            case "e":
                e++;
                break;
            case "i":
                i++;
                break;
            case "o":
                o++;
                break;
            case "u":
                u++;
                break;

        }
    }

    document.getElementById("salida1").innerHTML = `A = ${a}, E = ${e}, I = ${i}, O = ${o}, U = ${u}`;

    

}

function dividirEnPalabras(){
    let texto = document.getElementById("texto").value; 

    let listaPalabras = dividir(texto);

    document.getElementById("salida1").innerHTML = listaPalabras;

    // console.log(listaPalabras);
}

function dividir(texto){
    return texto.split(" ");
}

function vueltaFrase(){
    let texto = document.getElementById("texto").value; 
    
    let listaPalabras = dividir(texto);
    let salidaReves = "";

    for(pal of listaPalabras){
       salidaReves = pal +" "+ salidaReves
    }

    document.getElementById("salida1").innerHTML = salidaReves;

}