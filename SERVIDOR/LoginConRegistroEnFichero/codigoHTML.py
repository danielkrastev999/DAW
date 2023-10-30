#guardar aqui todos los codigos html

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
        <h1>Login con registro</h1>
    """)

#   El cierre de la pagina main
def finalHTML():
    print("""
    </body>
    </html>
    """)

def Error(texto):
    print(""" 
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="3;index.html"> <!--recarga pag a los 2 seg-->
            <title>Login con registro en fichero</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="error-container">
                <h1>Error</h1>
                <h3>"""+texto+"""</h3>
            </div>
        </body>
        </html>
    """)

def Correcto():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <!-- <meta http-equiv="refresh" content="5;index.html">--> <!--recarga pag a los 2 seg-->
            <title>Login con registro en fichero</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="error-container">
                <h1>Correcto</h1>
            </div>
        </body>
        </html>
    """)

def irAPagina1():
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="0;pagina1.py"> <!--recarga pag a los 2 seg-->
            <title>Login con registro en fichero</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
            <div class="error-container">
                <h1>Correcto</h1>
            </div>
        </body>
        </html>
    """)


def Aplicacion(texto, enlace):
    print('''Content-type: text/html\n
          
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <!-- <meta http-equiv="refresh" content="3;index.html"> --> <!--recarga pag a los 3 seg-->
            <title>Login con registro en fichero</title>
        </head>

        <body>
                <h1>wow maquina</h1>
                
                <h3>'''+texto+'''</h3>

                
            <a href='''+enlace+'''>enlace a otra pagina</a>
            <br />  
            <a href="logout.py"> Salir de la aplicacion</a>
        </body>
        </html>
    ''')