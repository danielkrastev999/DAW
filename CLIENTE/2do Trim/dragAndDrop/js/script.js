

function arrastrando(event) {
    console.log(event.target.id);

    event
        .dataTransfer
        .setData('text/plain', event.target.id); 

    event
        .currentTarget.style
        .backgroundColor = 'yellow';

}

function recibiendo(event) {
    event.preventDefault();
    console.log(event.target.id);
}

function soltar(event){
    const id = event.dataTransfer.getData("text")

    console.log("soltar: " +id);
    console.log("destino: "+event.target.id);

    let objQueArrastro = $("#"+id)
    let destino  = $("#"+event.target.id)

    destino.append(objQueArrastro)

}