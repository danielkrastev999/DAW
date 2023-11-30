#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

def crearCookie():
    cookie["CONTADOR"] = 1
    cookie["CONTADOR"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT;" #poner un año antes la cookie
    print(cookie)
    print()
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

print("Content-type: text/html")
cookie = http.cookies.SimpleCookie() 
crearCookie()



htmlInicio()
print("<h3>"+cookie["CONTADOR"].value+"</h3>")
print("<a href='visitas.py'>Volver a visitas</a><br />")
htmlFinal()
