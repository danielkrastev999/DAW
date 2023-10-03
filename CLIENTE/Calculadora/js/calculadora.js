function calcula(){
	console.log("funcion calcula");

	//	Leer los datos del formulario, los numeros
	let n1 = Number(document.getElementById("num1").value); //	obtener el valor del elemento con el id num1
	let n2 = Number(document.getElementById("num2").value); //	obtener el valor del elemento con el id num2

	// 	Leer la operacion que queremos hacer
	let suma = document.getElementById("suma").checked; // true or false
	let resta = document.getElementById("resta").checked; 
	let multi = document.getElementById("multi").checked; 
	let divi = document.getElementById("divi").checked; 

	//	Realizar la operacion
	if (suma){
		resultado = n1 + n2;
	}
	else if (resta){
		resultado = n1 - n2;
	}
	else if (multi){
		resultado = n1 * n2;
	}
	else {
		resultado = n1 / n2;
	}
	

	//	Mostrar el resultado
	// console.log(resultado);
	document.getElementById("salida1").innerHTML = resultado; // Mostrar el resultado en el html
	document.getElementById("salida2").innerHTML = resultado;
}

