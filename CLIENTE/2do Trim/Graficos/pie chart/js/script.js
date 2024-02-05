$(inicio);

function inicio(){

    // Guardo el canvas en una variable
    const cnv = $("#myChart");

    // Minimo tengo que tener unas etiquetas y un conjunto de datos para representar
    const datos = {
        labels:['Verde','Rojo','Lila'],
        // En un data sets, puedo tener mas de un conjunto de datos
        datasets:[{
            label: "datos de salmon",
            data:[300,50,100],
            borderWidth: 3,
            backgroundColor: ["#00FF0055","#FF000055","#0000FF55"],

        }
        ]
    };

    // Dos campos: Canvas + Objeto
    new Chart(cnv, {
        // Bar(este no), Pie, Line, Scatter CHARTS PARA EL EXAMEN :)
        type: "pie", 
        // Datos a representar
        data: datos,
        // Modificacion extra del grafico
        options: {}
    });
}

