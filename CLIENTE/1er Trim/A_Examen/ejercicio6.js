
function enviar() {
    // Obtener valores del formulario
    const numero = document.getElementById("numero").value;
  
    // Validar el formulario antes de realizar la solicitud AJAX
    if (!compruebaPrimo()) {
        console.log("Formulario no válido. No se realizará la solicitud AJAX.");
        return false;
    }
  
    // Construir URL con parámetros
    const url = `/CLIENTE/A_Examen/primos.py?numero=${encodeURIComponent(numero)}`;

    // Realizar solicitud AJAX
    const httpRequest = new XMLHttpRequest();
        console.log("LLEGAAAA?");
    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mostrarResultado();
        } else {
            console.log('Estado: ${this.readyState}, Respuesta del servidor: ${this.status}');
        }
    };
  
    httpRequest.open("GET", url, true);
    httpRequest.send();
  
    // Evitar que el formulario se envíe normalmente
    return false;
  }

// Valida el formulario
function compruebaPrimo(){
    // variable de control
    let valido = true;

    const numeroInput = document.getElementById("numero").value;

    // pasamos el numero a entero por si acaso no lo era
    numeroInput = parseInt(numeroInput);

    console.log(typeof(numeroInput));

    // Si el numero es entero
    if(!Number.isInteger(numeroInput)){
        valido = false
    }
    // Si el numero es mayor que cero y menor que 100
    if(numeroInput < 0 || numeroInput > 100){
        valido = false
    }

    return valido
}

function mostrarResultado(){
    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Cuando la solicitud AJAX se completa con éxito, parsea los datos
            // JSON y llama a la función para crear la tabla.
            const respuestaPrimo = JSON.parse(this.responseText);
            if(respuestaPrimo){
                alert("YEA, el numero es par :D")
            }else{
                alert("El numero NOO es par :(")
            }
        } else {
            console.log(`Estado: ${this.readyState}, Respuesta del servidor: ${this.status}`);
        }
    };
  
    // Realizar una solicitud AJAX para obtener los datos del servidor
    httpRequest.open("GET", "/CLIENTE/A_Examen/primos.py", true);
    httpRequest.send();
}


