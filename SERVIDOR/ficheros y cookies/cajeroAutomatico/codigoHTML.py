def inicioHTML():
    print("""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Banco Gijon</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Banco</h1>
    """)

def finalHTML():
    print("""
    </body>
    </html>
    """)

def inicioTabla():
    print("""
    <div class="containerTabla">
        <table>
            <thead>
                <tr>
                    <td>ID Cuenta</td>
                    <td>Nº Cuenta</td>
                    <td>Saldo</td>
                    <td>Consultar informacion</td>
                </tr>
            </thead>
            <tbody>
    """)


def cuentasTabla():
    print("""
     <tr>
        <td></td>
        <td></td>
        <td></td>
        <td><button type="submit" id="botonVerCuenta">Ver cuenta</button></td>
    </tr>
    """)


def finalTabla():
    print("""
            </tbody>
        </table>
    </div>
    """)

def crearCuenta():
    print("""
    <div class="containerCrearCuenta">
        <form action="cuentaNueva.py" method="get">
            <button type="submit" id="botonCrearCuenta">Crear cuenta</button>
        </form>
    </div>
    """)

def htmlRecarga():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="1;listaCompraJSON.py"> <!--recarga pag a los 2 seg-->
            <title>Creando cuenta</title>
            </head>

        <body>
            <h1>Creando cuenta</h1>
        </body>
        </html>
    """)
    