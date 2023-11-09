//onload=principal;

//  conectarse por ajax al servidor
//  pedir los datos de videojuegos 
//  rellenar la tabla 

let tbodyDatos

function principal(){
    // borrar el tbody cada vez que llamamos a principal para que refresque al hacer click en 'ver todos'
    tbodyDatos = document.getElementById("tablaDatos")
    tbodyDatos.innerHTML = ""

    traerDatosServidor()
}


function traerDatosServidor(){
//  Peticion a servidor para que nos devuelva daros
    //  1. crear el objeto para conectar al servidor
    let httpRequest = new XMLHttpRequest();

    //  2. resolver la respuesta
    httpRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ // Si la respuesta es correcta..
            //  4 == completo          //200 == OK
            /******************************************************************
                //console.log(this.responseText); // texto plano
                //console.log(JSON.parse(this.responseText)); //lista
            *******************************************************************/
            let datos = JSON.parse(this.responseText) // guardo en un array el contenido traido desde el servidor
            crearFilas(datos);
            
            //  this.responseText contiene todo lo que ha enviado el servidor
        }
        else{ // La peticion tiene un error
            console.log("ESTADO: "+this.readyState+", respuesta servidor: "+this.status);
        }   
    }

    //  3. construir la peticion
    // el servidor ejecuta pedirdatosAPI, y me devuelve algo, ese algo
    // y lo convierto en un array 
    httpRequest.open("GET", "/SERVIDOR/proyecto_videojuegos/pedirdatosAPI.py", true);
    //  si ponemos el link en el browser, podemos ver si nos trae los datos del .py : http://www.daw.com/SERVIDOR/proyecto_videojuegos/pedirdatosAPI.py

    //  4. hacer la llamada al servidor
    httpRequest.send();

}


//etiqueta template : crea una estructura pero no la usa. en JS puedes cogerlo, clonarlo y rellenarlo 
function crearFilas(listaVideojuegos){

    console.log(listaVideojuegos);

    const plantilla = document.getElementById("filaDatos");
    tbodyDatos = document.getElementById("tablaDatos")


    // bucle
    for(let vj of listaVideojuegos){
        let filaTR = document.importNode(plantilla.content, true);
        
	    //filaTR.id = "vj"+vj[0];
        filaTR.querySelector('#fila').id = "vj"+vj[0];

	    let nombreTD = filaTR.querySelector("#nombre");
	    nombreTD.innerHTML = vj[1];

	    let empresaTD = filaTR.querySelector("#empresa");
	    empresaTD.innerHTML = vj[2];

	    let tematicaTD = filaTR.querySelector("#tematica");
	    tematicaTD.innerHTML = vj[3];


	    let numero_de_jugadoresTD = filaTR.querySelector("#numero_de_jugadores");
	    numero_de_jugadoresTD.innerHTML = vj[4];


	    let publicacionTD = filaTR.querySelector("#publicacion");
	    publicacionTD.innerHTML = vj[5];

        let borrarTD = filaTR.querySelector("#borrar");
	    borrarTD.addEventListener("click", function() {
            borrar(vj[0]);
        });

        let modificarTD = filaTR.querySelector("#modificar");
	    modificarTD.addEventListener("click", function() {
            modificar(vj[0]);
        });

	    tbodyDatos.appendChild(filaTR);
        }
    //fin bucle
}

function borrar(id){
     //  1. crear el objeto para conectar al servidor
     let httpRequest = new XMLHttpRequest();

     //  2. resolver la respuesta (cuando te responda el servidor haz esto pero de momento nada)
     httpRequest.onreadystatechange = function(){
         if(this.readyState == 4 && this.status == 200){ // Si la respuesta es correcta..
             console.log(this.responseText);
             //  this.responseText contiene todo lo que ha enviado el servidor
             let borrado = JSON.parse(this.responseText)
             if(borrado){
                let filaBorrar = document.getElementById("vj"+id);

                filaBorrar.remove()
             }
             else{
                alert("NONONONOseBORROooooooooooooooooooooon")
             }
         }
         else{ // La peticion tiene un error
             console.log("ESTADO: "+this.readyState+", respuesta servidor: "+this.status);
         }   
     }
     //llamamos a borrarAPI.py
     httpRequest.open("GET", "/SERVIDOR/proyecto_videojuegos/borrarAPI.py?id="+id, true);
     httpRequest.send();
}

function modificar(id){
    let hola = window.prompt("Hola, como estas?")
    alert(hola)
}

function filtrar(){
    let empresa = document.getElementById('empresaForm').value;
    let tematica = document.getElementById('tematicaForm').value;
    let numero_de_jugadores = document.getElementById('numero_de_jugadoresForm').value;
    let anioInicial = document.getElementById('anioInicialForm').value;
    let anioFinal = document.getElementById('anioFinalForm').value;

    let filtro = ""

    if(empresa != ""){
        filtro = "empresa="+empresa;
    }
    if(tematica != ""){
        if(filtro != ""){
            filtro += "&tematica="+tematica;
        }
        else{
            filtro += "tematica="+tematica;
        }
    }
    if(numero_de_jugadores != ""){
        if(filtro != ""){
            filtro += "&numero_de_jugadores="+numero_de_jugadores;
        }
        else{
            filtro += "numero_de_jugadores="+numero_de_jugadores;
        }
    }
    if(anioInicial != ""){
        if(filtro != ""){
            filtro += "&anioInicial="+anioInicial;
        }
        else{
            filtro += "anioInicial="+anioInicial;
        }
    }
    if(anioFinal != ""){
        if(filtro != ""){
            filtro += "&anioFinal="+anioFinal;
        }
        else{
            filtro += "anioFinal="+anioFinal;
        }
    }
    console.log(filtro);


     //  1. crear el objeto para conectar al servidor
     let httpRequest = new XMLHttpRequest();

     //  2. resolver la respuesta
     httpRequest.onreadystatechange = function(){
         if(this.readyState == 4 && this.status == 200){ // Si la respuesta es correcta..
            console.log("ESTO "+this.responseText);

             tbodyDatos = document.getElementById("tablaDatos");
             tbodyDatos.innerHTML = "";

             let datos = JSON.parse(this.responseText) // guardo en un array el contenido traido desde el servidor
             crearFilas(datos);
             
         }
         else{ // La peticion tiene un error
             console.log("ESTADO: "+this.readyState+", respuesta servidor: "+this.status);
         }   
     }
 

     httpRequest.open("GET", "/SERVIDOR/proyecto_videojuegos/filtrardatosAPI.py?"+filtro, true);
     httpRequest.send();


}

function insertar(){
    let nombre = document.getElementById('nombreInsertar').value;
    let empresa = document.getElementById('empresaInsertar').value;
    let tematica = document.getElementById('tematicaInsertar').value;
    let numero_de_jugadores = document.getElementById('numero_de_jugadoresInsertar').value;
    let publicacion = document.getElementById('anioInsertar').value;

	let insertaDatos = "";
	let datosOk = true;

	if(nombre != ""){
		insertaDatos += "nombre="+nombre;
	}else{
		datosOk = false;		
	}
	if(empresa != ""){
		insertaDatos += "&empresa="+empresa;
	}else{
		datosOk = false;		
	}
	if(tematica != ""){
		insertaDatos += "&tematica="+tematica;
	}else{
		datosOk = false;		
	}
	if(numero_de_jugadores != ""){
		insertaDatos += "&numero_de_jugadores="+numero_de_jugadores;
	}else{
		datosOk = false;		
	}
	if(publicacion != ""){
		insertaDatos += "&publicacion="+publicacion;
	}else{
		datosOk = false;		
	}	


	console.log(insertaDatos);	

	if(datosOk){
		//crear el objeto para conectar al servidor
		const httprq = new XMLHttpRequest();

		//resolver la respuesta

		httprq.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){ //si la respuesta es correcta
				console.log(this.responseText);
				principal();

			}else{ //la peticion tiene un error
				console.log("estado: "+this.readyState+", resp servidor:"+this.status);
			}
		}

		//hacer la llamada al servidor
		//contruir la peticion
		httprq.open("GET", "/SERVIDOR/proyecto_videojuegos/insertadatosAPI.py?"+insertaDatos,true);

		//ejecuto la peticion
		httprq.send();		
	}else{
		alert("datos incorrectos")
	}
}

    
