//onload=inicio; // 	Este evento se dispara despues de que se cargue y renderice toda la pagina

// 					onload=inicio(); MALA PRACTICA! Llama a la funcion y la ejecuta ¡¡ ERROR !!


let suma = 0;
suma = 2 + 5;
console.log(suma);

function inicio(frase) {
	console.log("Esto es una salida por consola de desarrollo"); 
	console.log(frase);

	document.getElementById("parrafo").innerHTML = "adios";
};

function nuevaVentana() {
	window.open();
};
