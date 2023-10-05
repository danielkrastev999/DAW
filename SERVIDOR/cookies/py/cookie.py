#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

from urllib.parse import parse_qs

param = parse_qs(os.environ.get("QUERY_STRING"))

usuario = param["usuario"][0]
passwd = param["passwd"][0]
# Cookie =  pequeña informacion enviada por un sitio web y 
#           almacenada en el navegador del usuario. 

#           Usos: identificar usuarios, cestas de compra

#           Para borrar una cookie se manda la fecha actual menos 1 dia

dentro = False # variable de control

if(usuario == "pepe") and (passwd == "1234"):
    dentro = True

if not dentro:
    print("Content-type: text/html\n") # El salto de linea es debido a que es necesario entre esto y el html
    print("""
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora Hipotenusa</title>
        </head>

    <body>
        <h1>Cookies</h1>
          <h3>ERROR EN LA AUTENTICACION</h3>
        <form action="py/cookie.py" method="get">
            <label for="usuario">Usuario</label>
            <input type="text" name="usuario" id="usuario"><br /><br />
            <label for="passwd">Password</label>
            <input type="text" name="passwd" id="passwd"><br /><br />
            <button type="submit">Entrar</button>
        </form>
    </body>
    </html>
          """)
else:
    print("Content-type: text/html")
    cookie = http.cookies.SimpleCookie() 
    cookie["ID1"] = "ALGO"

    print(cookie)
    print()
    print("""
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora Hipotenusa</title>
        </head>

    <body>
        <h1>Estas dentro !</h1>
    </body>
    </html>
          """)