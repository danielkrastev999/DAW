// se dispara una alerta cuando el contenido cambia

// traigo por parametro el id del input que se lo paso cuando llamo la funcion en el html
function mostrarContenido(id){
    // guardo el contenido de los input, cada uno en una variable, con el .value para poner sacar el contenido
    let contenidoInput1 = document.getElementById("texto1").value;
    let contenidoInput2 = document.getElementById("texto2").value;

    // compruebo que el id pertenece al texto 1
    if(id == 'texto1'){
        alert("El contenido del campo "+id+" ha cambiado a: "+contenidoInput1)
    }
    // compruebo que el id pertenece al texto 2
    if(id == 'texto2'){
        alert("El contenido del campo "+id+" ha cambiado a: "+contenidoInput2)
    }
    
}