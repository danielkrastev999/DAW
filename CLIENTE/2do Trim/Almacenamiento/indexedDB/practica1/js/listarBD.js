let db; 
let openRequest = indexedDB.open("miBaseDeDatos", 1);

// ********************************************************************************

openRequest.onupgradeneeded = function() {
    // recuperar el objeto en una variable local
    let db1 = openRequest.result;
    // Crear almacenes,claves, indices solo se puede crear aqui !!!!
    console.log("Entrando por el evento: 'upgradeneeded'");

    // Crear almacen
    db1.createObjectStore('libros', {keyPath: 'id'})

};

openRequest.onerror = function() {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
    db = openRequest.result
    // continúa trabajando con la base de datos usando el objeto db
    console.log("Entrando por el evento: 'success'");
    listar()
};

// ********************************************************************************


function listar(){
    //  1. Crear una transaccion
    let transac = db.transaction("libros","readonly"); // Solo lectura

    //  2. Obtener el almacen para poder trabajar con el
    let lbrs = transac.objectStore("libros")

    //  3. Añadir el objeto al almacen (se puede limitar)
    let salida = lbrs.getAll(IDBKeyRange.bound("1","6",false,true)) // Baking ranks !!!!!!! 
    //                                              1 incluido, 3 excluido
    console.log(salida);

    salida.onsuccess = function() {
        console.log(salida.result[0]);

        let tabla = document.getElementById('salida');
        
        for (libro of salida.result){
            let fila = document.createElement('tr'); // Crear la fila

            let celdaId = document.createElement('td'); // Crear la celda
            celdaId.appendChild(document.createTextNode(libro.id)) // Rellenar la celda 
            fila.appendChild(celdaId)

            let celdaTitulo = document.createElement('td');
            celdaTitulo.appendChild(document.createTextNode(libro.titulo))
            fila.appendChild(celdaTitulo)

            let celdaAutor = document.createElement('td');
            celdaAutor.appendChild(document.createTextNode(libro.autor))
            fila.appendChild(celdaAutor)

            let celdaTipo = document.createElement('td');
            celdaTipo.appendChild(document.createTextNode(libro.tipo))
            fila.appendChild(celdaTipo)

            tabla.appendChild(fila)

            console.log(libro.autor);
        }
    }

    // BUSCAR UN KEY EN CONCRETO aunq no tiene mucho sentido, getAllKey es posible que si !
    let res = lbrs.getKey("1")
    // cuando venga el evento !! ejecuta esto
    res.onsuccess = function(){
        console.log("Clave obtenida: "+res.result);
    }

    /* ****************************************************************** */

    // TRANSACCION CON EL INDICE
    let ti = lbrs.index("titulo_ind"); // busco el indice en el almacen

   // let res1 = ti.getKey("LIBRO 1") // devuelve el primer objeto que cumpla 

    let res1 = ti.getAllKeys() // ejecuto la consulta sobre el indice
    // getAllKeys() -> Devuelve un array

    res1.onsuccess = function(){
        console.log(res1.result);
        for(keylibro of res1.result){ // recorro el resultado
            console.log(lbrs.get(keylibro)); // devuelve tantos objetos IDBRequest como indices haya en la tabla
        }
    }

    /* BORRADO */
    

}
