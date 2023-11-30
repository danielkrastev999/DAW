$(principal);


function principal(){
    console.log("DOM cargado");

    $("#ocultar").click(function(){
        $("p").hide();
    })

    $("#mostrar").click(function(){
        $("p").show();
    })

    // toggle funciona como hide y como show en el mismo boton
    $("#ambas").click(function(){
        $("p").toggle();
    })

    $("#impar").click(function(){
        $(".impar").toggle();
    })

    $("#par").click(function(){
        $(".par").toggle();
        // cambiar el contenido del elemento que he pulsado, en este caso el boton
        this.innerHTML = "cambiado";
    })

    $("#p1").click(function(){
        //$(this).hide();
        this.style.background="red";
    })

    /***********************************************************************/

    //  CLICK

    $("p").click(function(){ //tambien esta 'dblclick'
        // Sacar el contenido del 'p' pulsado por consola
        console.log(this.innerHTML)
    })

    $("p").mouseenter(function(){ //tambien esta 'mouseleave'
        // Sacar el contenido del 'p' pulsado por consola
        console.log(this.innerHTML)
    })

    $("p").mouseenter(function(){ //tambien esta 'mouseleave'
        // Sacar el contenido del 'p' pulsado por consola
        console.log(this.innerHTML)
    })

    //el 'hover' es mouseenter y mouseleave, se lanza 2 veces, al entrar y al salir

    $("button").focus(function(){ // Funciona en inputs y botones
        // Evento seleccionado pero si hacer todavia nada con el 
        console.log(this.innerHTML)
    })  

}

