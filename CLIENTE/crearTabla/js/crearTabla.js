

function getTable(){
    let cuerpo = document.getElementsByTagName("body")[0];
    let tablaExistente = document.getElementById("miTabla");


    if (tablaExistente) {
        cuerpo.removeChild(tablaExistente); 
    }

    let tabla = document.createElement("table");
    tabla.id = "miTabla"; 


    let tblBody = document.createElement("tbody");

    let totalFilas = document.getElementById("filasInput").value;
    let totalColumnas = document.getElementById("columnasInput").value;
    let colorBorde = document.getElementById("colorInput").value;
    let bordeSi = document.getElementById("bordeSi");


    for(let i = 0; i < totalFilas; i++){
        let filas = document.createElement("tr");
        for(let j = 0; j < totalColumnas; j++){
            let celda = document.createElement("td");
            celda.textContent = "ALGO " + (i + 1);
            celda.style.padding = "1em"
            if (bordeSi.checked) {
                tabla.style.borderCollapse = "collapse";
                celda.style.border = "1px solid " + colorBorde;
            }
            filas.appendChild(celda);
        }
        tblBody.appendChild(filas); 
    }
    
    tabla.appendChild(tblBody);
    cuerpo.appendChild(tabla);
    
    

}

