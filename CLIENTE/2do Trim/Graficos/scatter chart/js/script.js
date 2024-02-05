$(inicio);

function inicio(){

    // Guardo el canvas en una variable
    const cnv = $("#myChart");

    // Minimo tengo que tener unas etiquetas y un conjunto de datos para representar
    const datos = {
        labels:['Junio','Julio','Agosto',"Septiembre","Octubre","Noviembre"],
        // En un data sets, puedo tener mas de un conjunto de datos
        datasets:[{
            label: "Scatter Dataset",
            data: [{
                x: -9, y: 6 
              }, {
                x: 0, y: 10
              }, {
                x: 8, y: 5
              }, {
                x: 0.5, y: 5.5
              }, {
                x: -3, y: 3
              }
            ],
            backgroundColor: ["#00000085"],

        }
        ]
    };

    // Dos campos: Canvas + Objeto
    new Chart(cnv, {
        // Bar(este no), Pie, Line, Scatter CHARTS PARA EL EXAMEN :)
        type: "scatter", 
        // Datos a representar
        data: datos,
        // Modificacion extra del grafico
        options: {
            scales: {
                x: {
                  type: 'linear',
                  position: 'bottom'
                }
              }
        }
    });
}

