// funcion que valida el formulario html de un texto

function validaTexto(){
    // Variable de control
    let respuesta = true;

    // Obtener los valores del campo
    let texto = document.getElementById("texto").value;

    // Validar texto, minimo 8 caracteres y maximo 10, si no se cumple devuelvo false para que no se ejecute el formulario
    if (texto.length < 8 || texto.length > 10) {
        alert("Minimo 8 caracteres y maximo 10");
        respuesta = false;
    }
    
    // si el texto es distinto a '123' desde el index 0, entonces error y devuelvo false para que no se ejecute el formulario
    if(!texto.startsWith("123",0)){
        alert("Los tres primeros caracteres deben ser 123");
        respuesta = false;
    }
    
    // Si no ha entrado en ninguno de los if's, cumple las condiciones y devuelvo respuesta con valor true y SI se ejecuta el formulario
    return respuesta
}