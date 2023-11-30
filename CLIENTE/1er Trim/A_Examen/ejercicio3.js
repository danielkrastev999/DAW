

function sonPares(listaNumeros){
    // variable de control
    let respuesta = true;

    // si la longitud del array es 0, devuelvo true
    if(listaNumeros.length < 1){
        console.log("error, el array esta vacio pero seguimos devolvuendo true :)");
    }


    for(numero of listaNumeros){
        if(numero%2 != 0){
            respuesta = false;
        }
    }

    return respuesta;

}

//listaNumeros = [2,4,6,8,9] // false

listaNumeros = [2,4,6,8,10]; // true

//listaNumeros = [2,4,"F"] // false, al no cumplir la condicion  %2 = 0,  devuelve false directamente
//  habia hecho comprobaciones de si es igual a NaN pero no hace falta

//listaNumeros = [] // true

let resultado = sonPares(listaNumeros);

console.log(resultado);