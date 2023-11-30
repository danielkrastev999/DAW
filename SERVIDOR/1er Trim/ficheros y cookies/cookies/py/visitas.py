#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

def htmlInicio():
    #   Codigo HTML que se envia al browser
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contador de visitas</title>
            </head>

        <body>
            <h1>Cookies</h1>
            """)
def htmlFinal():      
    print("""
        </body>
        </html>
            """)



#   1. Comprobar si el cliente nos envia  alguna cookie, y 2. en concreto la cookie CONTADOR
#       True -> incrementamos el valor que trae la cookie
#       False -> el cliente no tenia cookie, le devolvemos CONTADOR = 1, la cookie que tengo que devolver


print("Content-type: text/html")
#   Forma de enviar la cookie al cliente 
cookie = http.cookies.SimpleCookie() 


# SI NO EXISTE LA COOKIE, LA CREO Y SE LA MANDO
if os.environ.get("HTTP_COOKIE") == None:
    cookie["CONTADOR"] = 1
    cookie["CONTADOR"]["expires"] = "Wed, 11 Oct 2023 07:28:00 GMT;" #cuando desaparecerá la cookie
    print(cookie)
    print()
else:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "CONTADOR" in cookie: #comprobar si la cookie contador existe en cookies
        cookie["CONTADOR"] = int(cookie["CONTADOR"].value) + 1
        cookie["CONTADOR"]["expires"] = "Wed, 11 Oct 2023 07:28:00 GMT;" #  Al refrescar seguirá salinedo la fecha de desaparicion
        print(cookie)
        print()
    else:
        cookie["CONTADOR"] = 1
        cookie["CONTADOR"]["expires"] = "Wed, 11 Oct 2023 07:28:00 GMT;" #cuando desaparecerá la cookie
        print(cookie)
        print()

#   Codigo HTML que se envia al browser
htmlInicio()
print("<h3>"+cookie["CONTADOR"].value+"</h3>")
print("<a href='resetContador.py'>Resetear Contador</a><br />")
print("<a href='borrarCookie.py'>Borrar Cookie</a>")    
htmlFinal()


