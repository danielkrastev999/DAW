//  Se declara como const para que no se pueda cambiar pero el contenido SI
const persona = {
    nombre: "Federico",
    apellidos: "Garcia Lorca",
    edad: 55,
    nacionalidad: "española",
    //un objeto puede tener metodos dentro
    datosCompletos: function(){
        alert(this.nombre + " - " + this.apellidos + " - " + this.edad);
    }
}
console.log(persona);
//alert(persona.nombre);
persona.apodo = "aka El Fede"; //   Creas un nuevo atributo
//alert(persona.apodo);

//acceder a un metodo creado en un objeto
persona.datosCompletos();

//crear un objeto vacio
const persona1 = new Object();

/*
persona1.nombre = "Jose";
persona1.apellidos = "Garcia";

//Persona 2 apunta a persona 1 ! tiene la misma referencia, si modificas persona2
//modificas persona1 realmente
const persona2 = persona1
//modificas persona2 pero sigue apuntando a persona1 asique modificas el persona1
persona2.nombre = "Josete";

alert(persona1.nombre); // muestra Josete
*/

// te muestra todas las propiedades del objeto persona:
for (let variable in persona){
    console.log(variable); 
    //nombre, apellidos, edad, nacionalidad, datosCompletos, apodo
}

// borrar una propiedad
delete persona.apodo;
for (let variable in persona){
    console.log(variable); 
    //nombre, apellidos, edad, nacionalidad, datosCompletos
}


// sacar todos los contenidos de las propiedades del objeto
for (let variable in persona){
    console.log(persona[variable]); 
    //Federico, Garcia Lorca, 55, Española, laFuncionCompleta
}

// objeto con otro objeto dentro que tiene dos propiendades, un string(name) y un array(models)
const myObj = {
    name: "John",
    age: 30,
    cars: [
        {name:"Ford", models:["Fiesta","Focus","Mustang"]},
        {name:"BMW", models:["320","x3","x5"]}
    ]
}

//todos los modelos que tiene ford
for (let modelo of myObj.cars[0].models){ 
    console.log(modelo);
}


function verElemento(elemento){
    //elemento.style.background = "red";
    elemento.style.display = "none";
    console.log(elemento);
}


// te mete los valores de las propiedades de un obj en un array
const myArray = Object.values(persona)
console.log(myArray);