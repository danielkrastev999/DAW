

def cabeceraHtml():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <title>Lista compra JSON</title>
            </head>

        <body>
            <h1>Cesta de la compra JSON</h1>
    """)
    

def finHtml():      
    print("""
        </body>
        </html>
    """)


def formulario():
    print("""
    <form action="productoNuevoJSON.py" method="get">
          
        <label for="nombre">Nombre del producto:</label>
        <input type="text" name="producto"/><br /><br />
          
        <label for="nombre">Cantidad del producto:</label>
        <input type="text" name="cantidad"/><br /><br />

        <button>Enviar</button>      
          
    </form>
    """)

def htmlRecarga():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="1;listaCompraJSON.py"> <!--recarga pag a los 2 seg-->
            <title>Contador de visitas</title>
            </head>

        <body>
            <h1>Cesta de la compra</h1>
            <h3>Producto apuntado</h3>
        </body>
        </html>
    """)
    