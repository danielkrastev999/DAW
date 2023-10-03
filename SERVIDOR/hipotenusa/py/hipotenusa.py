#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

from math import sqrt

import os 
from urllib.parse import parse_qs



#   recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

#   adjudicamos los valores traidos en variables 
#   n1 = param[nombreEnHTML guardado en name="num1"][posicion en el array, param es un DICCIONARIO]
lon1 = float(param["lon1"][0])
lon2 = float(param["lon2"][0])

resultado = sqrt(lon1**2 + lon2**2)


#     Pintamos en una nueva pagina el resultado del calculo
print("""
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>

    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Latest compiled JavaScript -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>
      <div style="border: 1px solid black; margin: 10em 40em; padding:5em 0;box-shadow: 10px 20px 8px 5px #cfe4ee; border-radius: 1em ">
      <h1 style="text-align: center; text-decoration: underline">RESULTADO</h1>
      <h3 style="text-align: center; font-size: 24px; margin: 20px">
      """)

#     Lo que aparecerá en la nueva pagina, redondeando a solo 3 decimales
print("La hipotenusa de {} y de {} es {} cm".format(lon1,lon2,"%.3f" % resultado))


print("""
      </h3>
      </div>
    </body>
</html>
      """)