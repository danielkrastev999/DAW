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
        <h1>Cajero automatico</h1>
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
                    <td>N Cuenta</td>
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
        <td><button type="submit" class="botonVerCuenta">Ver cuenta</button></td>
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
        <form action="crearCuenta.py" method="get">
            <button id="botonCrearCuenta">Crear cuenta</button>
        </form>
    </div>
    """)

def inicioElegirCuenta():
    print("""
        <div class="containerIngresarRetirar">

        <form action="movimiento.py" method="get">
            <label for="nombre">Elige la cuenta con la que deseas operar</label>
                <select id="selectCuenta" name="idCuenta">
    """)

def finalElegirCuenta():
    print("</select><br />")

def ingresarRetirar():
    print("""
            <label for="nombre">Introduce cantidad</label>
            <input type="number" name="cantDinero"/><br /><br />

            <label><input type="radio" name="oper" value="ingresar"> Ingresar</label>
            <label><input type="radio" name="oper" value="retirar"> Retirar</label>

            <button id="botonRealizarOperacion">Realizar operacion</button>
        </form>
    </div>
    """)

def htmlRecargaCrearCuenta():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="1;main.py"> <!--recarga pag a los 2 seg-->
            <title>Creando cuenta</title>
            <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="valid-container">
            <h1>Creando cuenta...</h1>
            <h3>Un momento por favor</h3>
            </div>
        </body>
        </html>
    """)
    
def htmlRecargaOperacion():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="1;main.py"> <!--recarga pag a los 2 seg-->
            <title>Creando cuenta</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="valid-container">
                <h1>Realizando operacion</h1>
                <h3>Espere un momento...</h3>
            </div>
        </body>
        </html>
    """)

def htmlErrorRetirada():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="2;main.py"> <!--recarga pag a los 2 seg-->
            <title>Creando cuenta</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="error-container">
                <h1>Saldo insuficiente</h1>
                <h3>No puede dejar su cuenta en negativo</h3>
            </div>
        </body>
        </html>
    """)

def htmlErrorNumNegativo():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="1;main.py"> <!--recarga pag a los 2 seg-->
            <title>Creando cuenta</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="error-container">
                <h1>Error</h1>
                <h3>No puede introducir numeros negativos ni 0</h3>
            </div>
        </body>
        </html>
    """)

def inicioVerCuenta():
    print("""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Detalles de tu cuenta</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
        <h1>Detalles</h1>
    """)      

def medioVerCuenta():
    print("""
        <div class="containerTabla">
        <table>
            <thead>
                <tr>
                    <td>OPERACIONES REALIZADAS</td> 
                    <td>SALDO ACTUAL</td>
                </tr>
            </thead>
        <tbody>
    """)

def finalVerCuenta():
    print("""
                </tbody>
            </table>
        </div>
        <div class="containerCrearCuenta">
            <form action="main.py">
                <button id="botonCrearCuenta">Volver a la pagina principal</button>
            </form>
        </div>
    </body>
    </html>
    """)