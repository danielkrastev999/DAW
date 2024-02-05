$(inicio);

function inicio(){
    $("button").click(
        function(){
            //$("#divisor1").load("datos/texto.dat #p2") // el #p2 es lo que busca en el fichero y si lo encuentra, lo muestra
            //$("#divisor1").load("datos/tabla.dat #tabla1")
            // tambien funciona buscando clases
            $("#divisor1").load("datos/tabla.dat .clase1",
            function(responseTxt, statusText, xhr){
                //statusText: Dice si se ha completado con exito o se ha producido un error
                //xhr: Dice el error que ha ocurrido
                //responseText: Si todo sale bien, aqui se guarda el contenido del fichero
                if(statusText == 'success'){
                    console.log(responseTxt);
                    alert("Datos recuperados con exito!")
                }
                if(statusText == "error"){
                    alert("Error: "+xhr.status + ": "+xhr.statusText)
                }
            });
    });
}