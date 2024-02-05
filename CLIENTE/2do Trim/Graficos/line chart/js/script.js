$(inicio);

function inicio(){

    // Guardo el canvas en una variable
    const cnv = $("#myChart");


    // Minimo tengo que tener unas etiquetas y un conjunto de datos para representar
    const datos = {
        labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio"],
        // En un data sets, puedo tener mas de un conjunto de datos
        datasets:[{
            label: "My first line chart",
            data:[100,50,100,81,23,53],
            fill: false,
            borderColor:"#0000FF80",
            tension: 0.2

        }]
    };

    // Dos campos: Canvas + Objeto
    new Chart(cnv, {
        // Bar(este no), Pie, Line, Scatter CHARTS PARA EL EXAMEN :)
        type: "line", 
        // Datos a representar
        data: datos,
        // Modificacion extra del grafico
        options: {}
    });
}

