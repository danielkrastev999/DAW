$(inicio);

function inicio(){
    $("button").click(
        function(){
            // al final añadimos el contenido del input del html para buscar ese usuario en concreto
            // hay que poner .val() para sacar el contenido del input !!
            $.get("https://jsonplaceholder.typicode.com/users/"+$("#idData").val(),
                function(data,status){
                    console.log(status);
                    console.log(data);

                    $("#salida").html("Nombre: " + data.name + "<br>Email: " + data.email)
                }
            )
    })
}