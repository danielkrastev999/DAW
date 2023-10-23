#   Metodo principal al que llamamos en el main para pintar la pagina
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

#   El cierre de la pagina main
def finalHTML():
    print("""
    </body>
    </html>
    """)

#   El inicio de la tabla, va dentro de inicioHTML
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

#   El cierre de la tabla 
def finalTabla():
    print("""
            </tbody>
        </table>
    </div>
    """)

#   Boton de crear cuenta que te lleva al crearCuenta.py
def crearCuenta():
    print("""
    <div class="containerCrearCuenta">
        <form action="crearCuenta.py" method="get">
            <button id="botonCrearCuenta">Crear cuenta</button>
        </form>
    </div>
    """)

#   La funcion incio que pinta el principo de elegir cuenta
def inicioElegirCuenta():
    print("""
        <div class="containerIngresarRetirar">

        <form action="movimiento.py" method="get">
            <label for="nombre">Elige la cuenta con la que deseas operar</label>
                <select  id="selectCuenta" name="idCuenta">
                <option value="eligeCuenta">Elige una cuenta</option>
    """)

#   Cerramos el select
def finalElegirCuenta():
    print("</select><br />")

#   Aqui van los checkbox de elegir la operacion y un input tipo number para escribir la cantidad a introducir
def ingresarRetirar():
    print("""
            <label for="nombre">Introduce cantidad</label>
            <input type="number" name="cantDinero" value="0"/><br /><br />

            <label><input type="radio" name="oper" value="ingresar" checked> Ingresar</label>
            <label><input type="radio" name="oper" value="retirar"> Retirar</label>

            <button id="botonRealizarOperacion">Realizar operacion</button>
        </form>
    </div>
    """)

#   Metodo principal de recarga de pagina que tarda un segundo y te redirecciona a la main
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
    
#   Html al que llamaremos cuando se realice una operacion  
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

#   Html de error al retirar
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

#   Error por introducir numeros negativos o 0
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

#   Error por introducir numeros negativos o 0
def htmlErrorSeleccionCuenta():
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
                <h1>Error</h1>
                <h3>Debes seleccionar una cuenta</h3>
            </div>
        </body>
        </html>
    """)

#   Error por introducir numeros negativos o 0
def htmlErrorLetraE():
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
                <h1>Error</h1>
                <h3>No puedes introducir la letra E</h3>
            </div>
        </body>
        </html>
    """)


#   El incio del html ver cuenta
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

#   la tabla de ver cuentas, en la que se muestran las operaciones realizadas
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

#   El cierre de ver cuenta, con un boton para volver a la pagina main
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