#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

def crearCookie():
    cookie["CONTADOR"] = 10
    print(cookie)
    print()
def htmlInicio():
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



print("Content-type: text/html")
#   Forma de enviar la cookie al cliente 
cookie = http.cookies.SimpleCookie() 

# SI NO EXISTE LA COOKIE, LA CREO Y SE LA MANDO
if os.environ.get("HTTP_COOKIE") == None or "CONTADOR" not in os.environ.get("HTTP_COOKIE"):
    crearCookie()
else:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if int(cookie["CONTADOR"].value) > 0: #comprobar si la cookie contador existe en cookies
        cookie["CONTADOR"] = int(cookie["CONTADOR"].value) - 1
        print(cookie)
        print()

htmlInicio()
print("<h3>"+cookie["CONTADOR"].value+"</h3>")    
htmlFinal()


