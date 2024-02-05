let openRequestai = indexedDB.open("BDAutoincrementada", 1);
let dbai; 

// Crear almacenes,claves, indices solo se puede crear aqui !!!!
openRequestai.onupgradeneeded = function() {
    // recuperar el objeto en una variable local
    let db1 = openRequestai.result;
    // Crear almacen
    db1.createObjectStore('libros', {autoIncrement: true})

};

openRequestai.onerror = function() {
    console.error("Error", openRequestai.error);
};

openRequestai.onsuccess = function() {
    dbai = openRequestai.result;
    // continúa trabajando con la base de datos usando el objeto dbai
    console.log("Entrando por el evento: 'success'");
};


function guardaBDautoincrementada(){
    dbai = openRequestai.result;
    console.log("Guardar en el almacen de objetos");

    // Recuperar los datos y Generar un objeto
    libro = {
        id : document.getElementById("idai").value,
        titulo : document.getElementById("tituloai").value,
        autor : document.getElementById("autorai").value,
        tipo : document.getElementById("tipoai").value,
    }

    console.log(libro);

    // Guardar el objeto en el almacen de la base de datos 
    //  1. Crear una transaccion
    let transacai = dbai.transaction("libros","readwrite"); // Tanto escritura como lectura

    //  2. Obtener el almacen para poder trabajar con el
    let lbrsai = transacai.objectStore("libros")

    //  3. Añadir el objeto al almacen
    let resultadoai = lbrsai.add(libro);

    //  4. Gestionar los eventos con el resultado de la operacion
    resultadoai.onsuccess = function(){
        console.log("Libro agregado al almacen",resultadoai.result);
    }
    resultadoai.onerror = function(){
        console.log("Error :(",resultadoai.error);
    }
}