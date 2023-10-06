//CREAR EJERCICIOS COMO ESTOS CON TODO TIPO DE OPCIONES APARTE DE TABLAS
function getTable(){

    let cuerpo = document.getElementsByTagName("body")[0];
    let tablaExistente = document.getElementById("miTabla");


    if(tablaExistente){
        cuerpo.removeChild(tablaExistente);
    }

    let tabla = document.createElement("table");
    tabla.id = "miTabla"

    
    let bodyTabla = document.createElement("tbody")
    let inputFilas = document.getElementById("inputFilas").value;
    let inputColumnas = document.getElementById("inputColumnas").value;
    let inputColor = document.getElementById("inputColor").value;


    for(let i = 0; i < inputFilas; i++){
        let filas = document.createElement("tr");
        for(let j = 0; j < inputColumnas; j++){
            let celdas = document.createElement("td");
            celdas.textContent = "Columna " + (j+1); 
            celdas.style.padding = "1em";

            if(document.getElementById("inputBorde").checked){
                tabla.style.borderCollapse = "collapse";
                celdas.style.border = "1px solid " + inputColor;
            }
            filas.appendChild(celdas);
        }
        bodyTabla.appendChild(filas)
    }
    tabla.appendChild(bodyTabla);
    cuerpo.appendChild(tabla);
}
