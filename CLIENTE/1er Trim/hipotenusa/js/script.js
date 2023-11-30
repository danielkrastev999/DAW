function calculoHipotenusa(){
    //  guardamos en num1 el valor de lo introducido en el input del html y lo transformamos a number con un casting
    let num1 = Number(document.getElementById("lon1").value); 
    let num2 = Number(document.getElementById("lon2").value);

    //  Hacemos la formula para sacar la hipotenusa,sacamos la raiz cuadrada con el metodo sqrt de math 
    resultado = Math.sqrt(num1**2 + num2**2);

    //  Limitamos a 3 los decimales 
    resultado = resultado.toFixed(3);

    //  Pintamos en el html el resultado
    document.getElementById("salida").innerHTML = resultado;

}