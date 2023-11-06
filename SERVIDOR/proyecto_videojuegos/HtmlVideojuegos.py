#   3. Creamos el html suelto y lo unimos todo en salida principal
def cabeceraHTML():
    cab = '''
        <!DOCTYPE html>
        <html lang="es">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Videojuegos Antiguos</title>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        
        </head>
        <body>
        '''
    print(cab)
    
def finHTML():
    fin = '''
        </body>
        </html>
        '''
    print(fin)

def salidaPrincipal(listaVideojuegos):
    cabeceraHTML()
    contenidoIni = '''<div class="row mt-3">


                        <div class="col-3">
                        
                        <h3 class="display-3">Filtros</h3>

                         <a class="m-3 btn btn-secondary" href="principal.py">Ver todos</a>

                        <form action="filtros.py"  class="m-3">
                            <div>
                                <label for="empresa" class="form-label">Empresa</label>
                                <input type="text" class="form-control" name="empresa">
                            </div>
                            <div>
                                <label for="tematica" class="form-label">Tematica</label>
                                <input type="text" class="form-control" name="tematica">
                            </div>
                            <div>
                                <label for="numero_de_jugadores" class="form-label">Numero de jugadores</label>
                                <input type="text" class="form-control" name="numero_de_jugadores">
                            </div>
                            <div>
                                <label for="anioInicial" class="form-label">Año inicial</label>
                                <input type="text" class="form-control" name="anioInicial">
                            </div>
                            <div>
                                <label for="anioFinal" class="form-label">Año final</label>
                                <input type="text" class="form-control" name="anioFinal">
                            </div>
                        <button class="mt-3 btn btn-secondary">Filtrar</button>
                        </form>

                        
                        </div>

                        <div class="col-6 bg-secondary text-light text-center">      
                            <h1 class="display-1">Videojuegos Antiguos</h1>
                    '''
   
    tabla='<table class="table table-striped">'


    tabla += "<tr><th>Nombre</th><th>Empresa</th><th>Tematica</th><th>Numero de jugadores</th><th>Año de publicación</th><th></th></tr>"

    # recorro la lista de videojuegos y los añado al string tabla que contiene todos los valores de la BD
    for datosVideojuego in listaVideojuegos:
        fila = "<tr><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td><td>{}</td></tr>"
        borrado = f'<a class="btn btn-danger" href="borrar.py?id={datosVideojuego[0]}">borrar</a>'
        tabla += fila.format(datosVideojuego[1],datosVideojuego[2],datosVideojuego[3],datosVideojuego[4],datosVideojuego[5],borrado)
    tabla += "</table>"


    contenidoFin = ''' </div>


                        <div class="col-3"></div>


                    </div>'''
   

    print(contenidoIni)

    print(tabla)

    print(contenidoFin)
    finHTML()