#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")


import os 
from urllib.parse import parse_qs



#   recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

#   adjudicamos los valores traidos en variables 
#   n1 = param[nombreEnHTML guardado en name="num1"][posicion en el array, param es un DICCIONARIO]
kilo = float(param["kilo"][0])
altura = float(param["altura"][0])

imc = kilo / (altura * altura)



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

<body style="background-color:beige">
      <div style="background-color:white; border: 1px solid black; margin: 10em 40em; padding:5em 0;box-shadow: 10px 20px 8px 5px #cfe4ee; border-radius: 1em ">
      <h1 style="text-align: center; text-decoration: underline">RESULTADO</h1>
      <h3 style="text-align: center; font-size: 24px; margin: 20px">
      """)


print("Tu indice de masa corporal es {}".format("%.3f" % imc))


print("""</h3>
      <h4 style="text-align: center; font-size: 22px; margin: 20px">Estado: """)

if imc < 18.5:
    print("Peso inferior al normal")
elif imc >= 18.5 and imc <= 24.9:
    print("Normal")
elif imc >=25 and imc <= 29.9:
    print("Peso superior al normal")
else:
    print("Obesidad")




print("""
      </h4>
      </div>
    </body>
</html>
      """)