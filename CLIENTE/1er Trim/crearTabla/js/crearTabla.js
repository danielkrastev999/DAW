
function getTable(){
    let cuerpo = document.getElementsByTagName("body")[0];
    let tablaExistente = document.getElementById("miTabla");


    if(tablaExistente){
        cuerpo.removeChild(tablaExistente);
    }

    let tabla = document.createElement("table");
    tabla.id = "miTabla";
    tabla.style.margin = "1em";

    let inputFilas = document.getElementById("inputFilas").value; // Filas a crear
    let inputColumnas = document.getElementById("inputColumnas").value; //  Columnas a crear
    let inputColor = document.getElementById("inputColor").value; //    Color de los bordes


    for(let i = 0; i < inputFilas; i++){
        let filas = document.createElement("tr");
        
        for(let j = 0; j < inputColumnas; j++){
            let celdas = document.createElement("td");
            celdas.textContent =(i+1) + " - " + (j+1); 
            celdas.style.padding = "1em";

            if(document.getElementById("inputBorde").checked){
                tabla.style.borderCollapse = "collapse";
                celdas.style.border = "1px solid " + inputColor;
            }
            filas.appendChild(celdas);
        }
        tabla.appendChild(filas);
    }
    cuerpo.appendChild(tabla);
}
