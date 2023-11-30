function trataDato(a,b){
     // let dato = Number(document.getElementById("dato").value);
    //let dato = document.getElementById("dato").value;

    dato = Number(dato)
            /*  Si tiene un casting hecho a Number pero introduces un String*/
            /*  el tipo de dato que recibes es NaN (No es un numero)*/

            /*  Muestra el tipo de dato que hay almacenado, si no se cambia*/
            /*  desde el formulario siempre viene como String*/
    // document.getElementById("salida").innerHTML = typeof dato; 

    // let x1 = 34;
    // document.getElementById("salida").innerHTML = x1;
    
            /*  Si el dato es un number se podria hacer una operacion con el*/
    // document.getElementById("salida").innerHTML = dato + 2 // dato(1) + 2 = 3

            /* Undefined = la variable no apunta a ningun sitio*/
    // let x; 
    // document.getElementById("salida").innerHTML = typeof x;

            /* null = objeto*/
    // let y = null;
    // document.getElementById("salida").innerHTML = typeof y;

            /* Un objeto es un objeto, un array o una fecha*/

    /* let x;  // undefined
    x = 10; // number
    x = "a" // string*/

            /* Los arrays se declaran con const*/
    // const cars = ["Saab", "Volvo", "Mercedes"];

            /* Objetos: se crean mediante prototipo */
    // const person = {firstName:"John", lastName:"Wick",age:20}

    

}

let x = trataDato; // contiene un apuntador a la funcion

console.log(x); // muestra la funcion 

console.log(x(1,4)); // devuelve el contenido de la funcion 

x(1,4); // si la funcion recibe dos parametros, se los pasa

let y = trataDato(1,5); // llama a la funcion y le pasa los numeros

console.log(y); //muestro el resultado