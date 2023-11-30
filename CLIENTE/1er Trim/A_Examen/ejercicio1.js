onload=media

function media(){
    let total  = 0
    let media = 0

    //Guardo en variables los numeros introducidos 
    let num1 = Number(prompt("Introduce el primer numero"));
    let num2 = Number(prompt("Introduce el segundo numero"));
    let num3 = Number(prompt("Introduce el tercer numero"));
    let num4 = Number(prompt("Introduce el cuarto numero"));

    //console.log(typeof(num1));

    // Compruebo si son enteros todos los numeros 
    if(Number.isInteger(num1) && Number.isInteger(num2) && Number.isInteger(num3) && Number.isInteger(num4)){
        // guardo la suma en una variable, la divido entre 4 y muestro la media por un alert
        total = num1 + num2 + num3 + num4
        media = total / 4
        alert("La media es "+media);
    }else{
        alert("Error, debes introducir numeros enteros");
    }

}