
function cambiaFondo(id){
    let background1 = document.getElementById("p1");
    let background2 = document.getElementById("p2");
    let background3 = document.getElementById("p3");

    if(id == 'p1'){
        background1.style.backgroundColor = "lightblue";
        background2.style.backgroundColor = "white";
        background3.style.backgroundColor = "white";
    }
    if(id == 'p2'){
        background1.style.backgroundColor = "white";
        background2.style.backgroundColor = "lightblue";
        background3.style.backgroundColor = "white";
    }
    if(id == 'p3'){
        background1.style.backgroundColor = "white";
        background2.style.backgroundColor = "white";
        background3.style.backgroundColor = "lightblue";
    }
}