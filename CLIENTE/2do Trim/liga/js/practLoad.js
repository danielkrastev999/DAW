$(cargarEquipos);

function cargarEquipos(){
    $("#botonCargar").click(
        function(){
            $.get("ligapy/generarEquipos.py",
                function(data,status){
                    let equipos = data.equipos;
                    $("#equiposSelect").empty();
                    
                    for (let i = 0; i < equipos.length; i++) {
                    let option = $("<option>").text(equipos[i]);
                    $("#equiposSelect").append(option);
                    }
                }
            )
        
    })
    mostrarDatos()
}

function mostrarDatos(){
    $("#botonMostrar").click(
        function(){
            let equipoSeleccionado = $("#equiposSelect").val();

            $.get("ligapy/datosEquipos.py?equipo="+equipoSeleccionado,
                function(data,status){
                    let datosEquipo = data;
                    $("#tabla").empty();

                    for (let dato in datosEquipo) {
                        let tr = $("<tr>")
                        let clave = $("<td>").css({
                            "padding": "16px",
                            "font-weight": "bold"
                        }).text(dato);
                        
                        let valor = $("<td>").css("padding", "16px").text(datosEquipo[dato]);
                        tr.append(clave, valor);
                        $("#tabla").append(tr);
                    }
                }
                
            )
    })
}