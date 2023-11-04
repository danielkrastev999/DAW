
function llamadaAjax(){
    /******************************************************************
     *     1. Configurar el objeto para la peticion al servidor
    *******************************************************************/

    let httpRequest = new XMLHttpRequest();


    /******************************************************************
     *     3. Registrar una fincion que trata la respuesta del servidor
     *          - Se hace mediante el evento: onreadystatechange
     *          - Este evento se dispara cuando se completa la 
     *            respuesta del servidor
    *******************************************************************/

    httpRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ // Si la respuesta es correcta..
            //  4 == completo          //200 == OK
            /******************************************************************
                //console.log(this.responseText); // texto plano
                //console.log(JSON.parse(this.responseText)); //lista
            *******************************************************************/
            let datos = JSON.parse(this.responseText) // guardo en un array el contenido traido desde el servidor
            crearSalida(datos); 
            //  this.responseText contiene todo lo que ha enviado el servidor
        }
        else{ // La peticion tiene un error
            console.log("ESTADO: "+this.readyState+", respuesta servidor: "+this.status);
        }   
    }


    /******************************************************************
     *     2. Peticion al servidor -> open("","","") 3 parámetros
    *******************************************************************/

    //  Contruir la peticion
    httpRequest.open("GET", "/SERVIDOR/AJAX_SERVIDOR/pedirdatos.py", true);

    //  Ejecuto la peticion
    httpRequest.send();

}


function insertaAjax(){
    let texto = document.getElementById("texto").value;
    let numero = document.getElementById("numero").value;
    console.log(texto+" "+numero);

    let httpRequest = new XMLHttpRequest();

    // construyo la peticion con los valores que recibo
    let peticion = "/SERVIDOR/AJAX_SERVIDOR/insertadatos.py?texto="+texto+"&numero="+numero;


    httpRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            let datos = JSON.parse(this.responseText) 
            alert("insertado maquina")
            
        }
        else{ // La peticion tiene un error
            console.log("ESTADO: "+this.readyState+", respuesta servidor: "+this.status);
        }   
    }
   
    //  Contruir la peticion
    httpRequest.open("GET", peticion, true);
   
    //  Ejecuto la peticion
    httpRequest.send();
    
}


function crearSalida(datos){

    let tablaHTML = "<table border='1px solid black' style='border-collapse: collapse;'>"

    //  Recorremos datos y guardamos cada uno de ellos rodeado de un <li></li>
    for(d of datos){
        tablaHTML += "<tr>";
        for (elem of d){
            tablaHTML += "<td>"+elem+"</td>";
        }
        tablaHTML += "<tr>";
    }
    tablaHTML += "</table>";

    //  Pintamos en el html la listaHTML
    document.getElementById("salida").innerHTML = tablaHTML;
}