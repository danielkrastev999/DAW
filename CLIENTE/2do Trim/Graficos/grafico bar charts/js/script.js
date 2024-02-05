$(inicio);

function inicio(){

    // Guardo el canvas en una variable
    const cnv = $("#myChart");

    // Minimo tengo que tener unas etiquetas y un conjunto de datos para representar
    const datos = {
        labels:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
        // En un data sets, puedo tener mas de un conjunto de datos
        datasets:[{
            label: "datos de salmon",
            data:[2,3,4,1,2,3,1],
            borderWidth: 3,
            // Se puede hacer un array y que se vayan rotando los colores con los valores de 'data'
            // backgroundColor: ['blue','red','orange']
            backgroundColor: "#00FF0055",
            borderColor: "#00FF00BB",
            //hoverBackgroundColor: "0000FFBB"
        }
        ]
    };

    // Dos campos: Canvas + Objeto
    new Chart(cnv, {
        // Bar(este no), Pie, Line, Scatter CHARTS PARA EL EXAMEN :)
        type: "bar", 
        // Datos a representar
        data: datos,
        // Modificacion extra del grafico
        options: {
            indexAxis: 'y'
        }
    });
}

