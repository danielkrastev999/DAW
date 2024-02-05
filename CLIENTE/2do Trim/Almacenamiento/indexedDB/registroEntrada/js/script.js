let openRequest = indexedDB.open("ControlDeEntrada", 1);
let db;

openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function () {
    db = openRequest.result;
    console.log("Entrando por el evento: 'success'");
    listar();
    listarSalida();
};

openRequest.onupgradeneeded = function (event) {
    let db1 = event.target.result;
    let clientes = db1.createObjectStore('clientes', { keyPath: 'dni' });
    let indexApellidos = clientes.createIndex("apellidos_ind", "apellidos");

    let salidas = db1.createObjectStore('salidas', { keyPath: 'dni' });
    let indexSalidas = salidas.createIndex("apellidos_ind", "apellidos");
};

function guardarEntrada() {
    db = openRequest.result;
    console.log("Guardar en el almacen de objetos");

    let cliente = {
        nombre: $("#nombre").val(),
        apellidos: $("#apellidos").val(),
        dni: $("#dni").val(),
        contacto: $("#contacto").val(),
        fechaEntrada: new Date().toDateString()
    };

    let tx = db.transaction("clientes", "readwrite");
    let cli = tx.objectStore("clientes");
    let agregarCliente = cli.add(cliente);

    agregarCliente.onsuccess = function () {
        console.log("Cliente registrado correctamente");
        listar();
        listarSalida()
        limpiar()
    };

    agregarCliente.onerror = function () {
        console.log("Error al registrar el cliente", agregarCliente.error);
    };
    
}


function moverASalidas(id) {
    let transacEntradas = db.transaction("clientes", "readwrite");
    let cliEntradas = transacEntradas.objectStore("clientes");
    // Obtener el cliente antes de eliminarlo
    let seleccionarCliente = cliEntradas.get(id);

    seleccionarCliente.onsuccess = function (event) {
        let cliente = event.target.result;
        console.log("asiiiiiii",cliente);
        // Eliminar el cliente de la transacción de Entradas
        cliEntradas.delete(id);

        // Iniciar la transacción de Salidas
        let transacSalidas = db.transaction("salidas", "readwrite");
        let cliSalidas = transacSalidas.objectStore("salidas");

        // Agregar el cliente a la transacción de Salidas
        let agregarSalida = cliSalidas.add(cliente);

        agregarSalida.onsuccess = function () {
            console.log("Cliente movido a Salidas correctamente");
            listar();
            listarSalida()
        };

        agregarSalida.onerror = function () {
            console.log("Error al mover el cliente a Salidas", agregarSalida.error);
        };
    };

    seleccionarCliente.onerror = function () {
        console.log("Error al obtener el cliente de Entradas", seleccionarCliente.error);
    };
}


function listar() {
    let transac = db.transaction("clientes", "readonly");
    let cli = transac.objectStore("clientes");
    let salida = cli.getAll();

    salida.onsuccess = function () {
        let tabla = $("#tabla tbody");

        tabla.empty();

        for (cliente of salida.result) {
            let fila = $("<tr>");

            fila.append($("<td>").text(cliente.nombre))
            fila.append($("<td>").text(cliente.apellidos))
            fila.append($("<td>").text(cliente.dni))
            fila.append($("<td>").text(cliente.contacto))
            fila.append($("<td>").text(cliente.fechaEntrada))


            let botonMoverASalidas = $("<button>")
            botonMoverASalidas.attr("id",cliente.dni)
            botonMoverASalidas.text("Eliminar")
            botonMoverASalidas.click(function(){
                moverASalidas(this.id)
                listar()
                listarSalida()
            })

            fila.append($("<td>").append(botonMoverASalidas));

            tabla.append(fila);
        }
    };
}

function listarSalida() {
    let transacSalidas = db.transaction("salidas", "readonly");
    let cliSalidas = transacSalidas.objectStore("salidas");
    let salida = cliSalidas.getAll();

    salida.onsuccess = function () {
        let tablaSalida = $("#tablaSalida tbody");
        let fechaSalida = new Date().toDateString();

        tablaSalida.empty();

        for (clienteSalida of salida.result) {
            let fila = $("<tr>");

            fila.append($("<td>").text(clienteSalida.nombre));
            fila.append($("<td>").text(clienteSalida.apellidos));
            fila.append($("<td>").text(clienteSalida.dni));
            fila.append($("<td>").text(clienteSalida.contacto));
            fila.append($("<td>").text(clienteSalida.fechaEntrada));
            fila.append($("<td>").text(fechaSalida));

            tablaSalida.append(fila);
        }
    };

    salida.onerror = function () {
        console.log("Error al obtener datos de Salidas", salida.error);
    };
}


function limpiar(){
    $("#nombre").val("")
    $("#apellidos").val("")
    $("#dni").val("")
    $("#contacto").val("")
}


function buscar(campo){

    

    if(campo == 'dni'){
        let buscDni = $("#buscarDNI").val()
        console.log("dni",buscDni);

        let txBuscEnt = db.transaction("clientes", "readonly");
        let cliente = txBuscEnt.objectStore("clientes");
        let seleccionarCliente = cliente.get(buscDni);
        seleccionarCliente.onsuccess = function (event) {
            
            let cliente = event.target.result;
            console.log(cliente);
            $("#tabla tbody").empty();

            if(cliente){
                $("#tabla tbody").append("<tr><td>" + cliente.nombre + "</td><td>" + cliente.apellidos + "</td><td>" + cliente.dni + "</td><td>" + cliente.contacto + "</td><td>" + cliente.fechaEntrada + "</td><td><button id="+ cliente.dni +" onclick='moverASalidas(this.id)'>Eliminar</button></td></tr>");
            }else{
                console.log("No se ha encontrado el cliente");
            }
    

        }
        seleccionarCliente.onerror = function () {
            console.log("Error al obtener el cliente expecifico de Entradas", seleccionarCliente.error);
        };


    }
    else if (campo == 'apell'){
        let buscApell = $("#buscarApellido").val()
        console.log("apellido",buscApell);
    }
   


}