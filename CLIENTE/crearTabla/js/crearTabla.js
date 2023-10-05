document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", function() {
        let filas = parseInt(document.getElementById("filasInput").value);
        let columnas = parseInt(document.getElementById("columnasInput").value);
        let color = document.getElementById("color").value;
        let tieneBorde = document.querySelector('input[name="borde"]:checked').value === 'si';

        crearTabla(filas, columnas, color, tieneBorde);
    });

    function crearTabla(filas, columnas, color, tieneBorde) {
        let body = document.getElementsByTagName("body")[0];
        let tabla = document.createElement("table");
        let tblBody = document.createElement("tbody");

        for (let i = 0; i < filas; i++) {
            let fila = document.createElement("tr");
            for (let j = 0; j < columnas; j++) {
                let celda = document.createElement("td");
                celda.textContent = "Fila " + (i + 1) + ", Columna " + (j + 1);
                celda.style.backgroundColor = color;
                if (tieneBorde) {
                    celda.style.border = "1px solid "+color;
                }
                fila.appendChild(celda);
            }
            tblBody.appendChild(fila);
        }

        tabla.appendChild(tblBody);
        body.appendChild(tabla);
    }
});
