// Cuando se cargue toda la pagina y todo el DOM este accesible, llamamos a la funcion 
//      sin () !!
onload=creaTabla;

let cuerpo; //  global scope

function creaTabla(){
    //  Obtener el elemento body del DOM
    cuerpo = document.getElementsByTagName("body")[0]; //   Devuelve un array y 
    //                                                      el primer elemento es el body

    let tabla = `<table id='tablaCreada'>
    <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
    <tr>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    </tr>
    </table>`

    //  Añado la tabla al HTML
    cuerpo.innerHTML = tabla

    let tablaCreada = document.getElementById("tablaCreada");

    console.log(tablaCreada);

    //  Crear elementos
    let fila = document.createElement("tr");
    let celda1 = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");

    //  Rellenar elementos celda con su contenido
    celda1.innerHTML="7";
    celda2.innerHTML="8";
    celda3.innerHTML="9";

    //  Añadir las celdas a la fila
    fila.appendChild(celda1)
    fila.appendChild(celda2)
    fila.appendChild(celda3)
    
    //  Añadir fila a la tabla
    tablaCreada.appendChild(fila)

}

