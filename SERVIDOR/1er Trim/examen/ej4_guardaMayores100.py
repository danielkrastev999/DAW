#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

# Este python maneja las cookies,si recibe un numero mayor que 100 
# si no existen las cookies las crea
# y si existen las intenta concatenar 

import http.cookies
import os
from urllib.parse import parse_qs
import sys
import ej4_muestraMayores100

param = parse_qs(os.environ.get("QUERY_STRING"))

#   Compruebo que llega por parametro 'numero' y si llega que no lo haga vacio
if "numero" in param and param["numero"][0] != "":
    #   Guardo el contenido en una variable llamada de la misma forma
    numero = int(param["numero"][0]) 
    # COMPROBACION numero ingresado
    #sys.stderr.write(f"==============={numero}=============")
    
#   Si el numero no es mayor o igual que 100 directamente le redirige al formulario otra vez
if numero >= 100:
    #    Sin \n al final
    print("Content-type: text/html")
    #    Creo la cookie
    cookie = http.cookies.SimpleCookie()
    
    #   Compruebo si la cookie existe y si existe, le añado el numero al que ya tenia
    if "Mayores100" in cookie:
        cookie["Mayores100"] = int(cookie["Mayores100"].value) + numero
        #   Llamo al metodo de mostrar el contenido de la cookie que lo tengo en otro python
        ej4_muestraMayores100.contenidoCookie(cookie)
    else:
        #   Cookie que se llama mayores100 y guarda el numero ingresado en el form
        cookie["Mayores100"] = int(numero)

        #print para ver la cookie y print vacio para crear un salto de linea necesario
        print(cookie)
        print()
        ej4_muestraMayores100.contenidoCookie(cookie)
else:
    print('''
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="2;formulario_numerico.html"> <!--recarga pag a los 2 seg-->
            <title>Login con registro en fichero</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
                <h2>Redirigiendote a la pagina principal</h2>
        </body>
        </html>
          ''')
