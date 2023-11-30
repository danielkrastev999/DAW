

let jug1 = 0
let jug2 = 0


let parejas = [1,2,3,1,2,3];
parejas.sort(() => Math.random() - 0.5);

console.log(parejas);

for(let i=0; i < parejas.length; i++){
    let tarjeta = $("<button>");
    tarjeta.attr("class",parejas[i]);
    tarjeta.addClass("estiloTarjeta");
    tarjeta.text(parejas[i]);
    $("#tablero").append(tarjeta);
}

let contador = true;

function comprobarMatch() {
    
    $(this).css("background-color", "yellow")
    if(contador){
        console.log(contador);
       // jug1 = ($(this).attr("class")).slice(0,1);
        jug1 = $(this).text()
        console.log("🚀 ~ file: memorizarIMG.js:22 ~ comprobarMatch ~ jug1:", jug1)
        contador = false;

        $(this).off("click");
    }
    else if (contador == false){
        console.log(contador);
        // jug2 = ($(this).attr("class")).slice(0,1);
        jug2 = $(this).text()
        console.log("🚀 ~ file: memorizarIMG.js:30 ~ comprobarMatch ~ jug2:", jug2)
        contador = true;

        $(this).off("click");


        if(jug1 == jug2){
            console.log("Match!");
            contador = true
        }
        else{
            console.log("NO match :(");
            setTimeout(function () {
                $("."+jug1+", ."+jug2).css("background-color", "bisque");
                $("."+jug1+", ."+jug2).on("click", comprobarMatch);
            }, 1000); 
        }

    }
    else{
        console.log("error, el contador esta mal");
    }
}

$(".estiloTarjeta").click(comprobarMatch);


// realizarlo con un aarray de objeto y dentro una propiedad de si esta clickado, 