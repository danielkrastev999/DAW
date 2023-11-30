#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os

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

print("Content-type: text/html")
cookie = http.cookies.SimpleCookie() 
cookie["CONTADOR"] = 1
cookie["CONTADOR"]["expires"] = "Wed, 11 Oct 2022 07:28:00 GMT;" 
print(cookie)
print()



htmlInicio()
print("<h3>Cookie borrada</h3>")
print("<a href='visitas.py'>Volver a visitas</a><br />") 
htmlFinal()