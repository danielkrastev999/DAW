
function validar(){
    let respuesta = false; //variable control

    let param1 = document.getElementById("parametro1");

    if (param1.value == "hola"){
        respuesta = true;
    }else{
        param1.style.background = "red";
    }

    return respuesta;
}