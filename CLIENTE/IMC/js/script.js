function calculoIMC(){
    //  guardamos en kilo/altura el valor de lo introducido en el input del html y hacemos el casting a Number
    let kilo = Number(document.getElementById("kilo").value);
    let altura = Number(document.getElementById("altura").value);

    //  Realizamos la formula para sacar el imc
    resultado = kilo / (altura * altura);

    //  Dejamos solo un decimal
    resultado = resultado.toFixed(1);

    //  Lo pintamos en el html, donde se encuentre el id salida
    document.getElementById("salida").innerHTML = resultado;

    //  Comprobacion de cual es tu estado segun tu IMC
    if(resultado < 18.5){
        document.getElementById("composicion").innerHTML = "Peso inferior al normal";
    } else if (resultado >= 18.5 && resultado <= 24.9){
        document.getElementById("composicion").innerHTML = "Normal";
    } else if (resultado >= 25 && resultado <= 29.9){
        document.getElementById("composicion").innerHTML = "Peso superior al normal";
    } else {
        document.getElementById("composicion").innerHTML = "Obesidad";
    }

}

