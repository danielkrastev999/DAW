
function hola(){

    let salida = document.getElementById("salida");
    let item = "";

    for (let i = 1; i <= 10; i++) {
        item += "#";
        salida.innerHTML += item + "<br />";
    }
}