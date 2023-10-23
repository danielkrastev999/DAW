//  Se declara como const para que no se pueda cambiar pero el contenido SI
const persona = {
    nombre: "Federico",
    apellidos: "Garcia Lorca",
    edad: 55,
    nacionalidad: "española"
}
console.log(persona);
alert(persona.nombre);
persona.apodo = "aka El Fede"; //   Creas un nuevo atributo
alert(persona.apodo);