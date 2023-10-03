#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os 
from urllib.parse import urlparse, unquote, parse_qs


print("""
<!DOCTYPE html>
    <html lang="es">
        <head>
            <title>Tratar Formulario</title>
            <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        </head>
        <body class="dropdown" data-bs-theme="dark">
            <h1>Tratar Formulario</h1>
""")           
      
ru = os.environ.get("REQUEST_URI") # obtener contenido de nombre y edad, almacenados en la variable ru

parametros = urlparse(ru) #diccionario

param = parse_qs(parametros[4]) # El 4 es porque es la posicion de los datos dentro del diccionario
#                               ¡ El nombre contiene un array y la edad otro array !
#                                 Siempre aparece como tipo texto

print(param["nombre"][0]) # nombre
print("<br />")
print(param["edad"][0])   # edad

print("""
        </body>
    </html>  
""")