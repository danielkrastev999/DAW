let openRequest = indexedDB.open("miBaseDeDatos", 1);
let db; 

openRequest.onupgradeneeded = function() {
    // recuperar el objeto en una variable local
    let db1 = openRequest.result;
    // Crear almacenes,claves, indices solo se puede crear aqui !!!!
    console.log("Entrando por el evento: 'upgradeneeded'");

    // Crear almacen y buscar por titulo ( para que aparezca el indice hay que borrar la BD)
    // ENTRAN INDICES EN EL EXAMEN :) continua en listarBD.js
    let libros = db1.createObjectStore('libros', {keyPath: 'id'})
    let indTitulo = libros.createIndex("titulo_ind","titulo")

};

openRequest.onerror = function() {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
    // abrimos la base de datos abierta aqui para poder guardar cosas en ella despues
    db = openRequest.result;
    // continúa trabajando con la base de datos usando el objeto db
    console.log("Entrando por el evento: 'success'");
};


function guardaBD(){
    db = openRequest.result;
    console.log("Guardar en el almacen de objetos");

    // Recuperar los datos y Generar un objeto
    libro = {
        id : document.getElementById("id").value,
        titulo : document.getElementById("titulo").value,
        autor : document.getElementById("autor").value,
        tipo : document.getElementById("tipo").value,
    }

    console.log(libro);

    // Guardar el objeto en el almacen de la base de datos 
    //  1. Crear una transaccion
    let transac = db.transaction("libros","readwrite"); // Tanto escritura como lectura

    //  2. Obtener el almacen para poder trabajar con el
    let lbrs = transac.objectStore("libros")

    //  3. Añadir el objeto al almacen
    let resultado = lbrs.add(libro);

    //  4. Gestionar los eventos con el resultado de la operacion
    resultado.onsuccess = function(){
        console.log("Libro agregado al almacen",resultado.result);
    }
    resultado.onerror = function(){
        console.log("Error :(",resultado.error);
    }



}
