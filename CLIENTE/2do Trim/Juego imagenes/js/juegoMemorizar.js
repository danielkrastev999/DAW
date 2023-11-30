
const cartas = [
    carta1 = {valor:1, carta:1, elegida:false, adivinada:false},
    carta2 = {valor:2, carta:2, elegida:false, adivinada:false},
    carta3 = {valor:3, carta:3, elegida:false, adivinada:false},
    carta4 = {valor:1, carta:4, elegida:false, adivinada:false},
    carta5 = {valor:2, carta:5, elegida:false, adivinada:false},
    carta6 = {valor:3, carta:6, elegida:false, adivinada:false}
]

let jug1 = 0
let jug2 = 0
let turno = true


cartas.sort(() => Math.random() - 0.5);
console.log(cartas);

for(let i=0; i < cartas.length; i++){
    let tarjeta = $("<button>");
    tarjeta.attr("class",cartas[i].valor);
    tarjeta.addClass("estiloTarjeta");
    tarjeta.text(cartas[i].valor);
    $("#tablero").append(tarjeta);
}




function comprobarMatch(){
    $(this).css("background-color", "yellow")

    if(turno){
        jug1 = $(this).text()
        console.log("La eleccion del jugador 1 es:   " +jug1);
        
        // Encuentra la carta correspondiente en el array y establece elegida a true
        cartas.find(carta => carta.valor == jug1).elegida = true;

        turno = false
    }
    else{
        jug2 = $(this).text()
        console.log("La eleccion del jugador 2 es:   " +jug2);

        // Encuentra la carta correspondiente en el array y establece elegida a true
        cartas.find(carta => carta.valor == jug2).elegida = true;

        turno = true
    }
    
    // Imprime el estado actual de las cartas
    console.log("Estado actual de las cartas:");
    console.log(cartas);
}

$(".estiloTarjeta").click(comprobarMatch);





// realizarlo con un aarray de objeto y dentro una propiedad de si esta clickado, 