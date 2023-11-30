onload=cadenaDePalabras

//  Funcion que guarda en una variable un nombre introducido por un prompt y luego lo escribe en el html 
//      y lo muestra por alert tambien.
//  Se asegura de que introduzcas algo o que no pusles cancelar (que es cuando devuelve null)

function mostrarNombre(){
    let nombre = prompt("Introduce tu nombre")

    if(nombre != null && nombre != ""){ 
    console.log(nombre);
    document.getElementById("salida").innerHTML = "Tu nombre es "+nombre
    alert(nombre)
    }
    else{
        alert("No has ingresado ningun nombre, chao pescao")
    }
}

function adivinaElNumero(){
    //  Generar un numero aleatorio entero del 0 al 10
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intentos = 0

    console.log(numeroSecreto);
    while (true) {
        // Pide al usuario que ingrese un número
        let numero = prompt("Intenta adivinar el número secreto (entre 1 y 10):");
    
        // Incrementa el contador de intentos
        intentos++;
    
        // Verifica si el usuario ingresó un número o presionó "Cancelar"
        if (numero != null && numero != "") {
            // Convierte la entrada del usuario a un número
            numero = parseInt(numero);
            // Verifica si el usuario adivinó el número
            if (numero === numeroSecreto) {
                alert("¡Felicidades! Adivinaste el número secreto en " + intentos + " intentos.");
                break;
            } else if (numero < numeroSecreto) {
                alert("El número secreto es mayor. Intenta nuevamente.");
            } else {
                alert("El número secreto es menor. Intenta nuevamente.");
            }
        }
        else{
            alert("Vaya ! Algo ha debido salir mal...");
            break
        }
    
        
    
        
    }
}

function cadenaDePalabras(){
    let frase = prompt("Escribe una frase para que la manipule")

    if (frase != null && frase.trim() != ""){
        //  Separa la cadena en palabras individuales.
        let palabras = []
        palabras = frase.split(" ")
        console.log(palabras); // ['Andrea', 'te', 'quiero']

        //  Cuenta la cantidad total de palabras.
        let totalPalabras = palabras.length
        console.log("La frase tenia "+totalPalabras+" palabras"); // La frase tenia 3 palabras

        //  Encuentra la palabra más larga.
        let letrasEnPalabra = 0
        let palabraMasLarga = ""
        for(let palabra of palabras){
            if (letrasEnPalabra < palabra.length){
                letrasEnPalabra = palabra.length; 
                palabraMasLarga = palabra
            } 
        }
        console.log("La palabra mas larga es: "+palabraMasLarga); //  palabra mas larga es: Andrea

        //  Convierte todas las palabras a minúsculas.
        palabrasMinusculas = [];
        for(let palabra of palabras){
            palabrasMinusculas.push(palabra.toLowerCase());
        }
        console.log(palabrasMinusculas); //  palabra mas larga es: Andrea

        //  Crea una nueva cadena que sea la versión invertida de la cadena original.
        let fraseInvertida = palabras.reverse().join(" ");
        console.log(fraseInvertida); // quiero te Andrea

        // Muestra los resultados utilizando la función alert
        alert("Cantidad total de palabras: " + totalPalabras +
        "\nPalabra más larga: " + palabraMasLarga +
        "\nTodas las palabras en minúsculas: " + palabrasMinusculas.join(" ") +
        "\nCadena original invertida: " + fraseInvertida);

    }else {
        alert("No ingresaste una cadena válida. ¡Adiós!");
    }

}