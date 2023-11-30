#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import cgi, json
import os
from urllib.parse import parse_qs

# Obtener los parámetros que envía el formulario
param = parse_qs(os.environ.get('QUERY_STRING'))

if "numero" in param and param["numero"][0] != "":
    n = param["numero"][0]


form = cgi.FieldStorage()
n = int(form['numero'].value)

primos = [2,3,5,7,11,13,17,19,23,29,31,37,41,43] # luego sigo

resultado = n in primos # True si esta en primos, False si no lo esta

print("Content-Type: text/plain\n")
print(json.dumps(resultado))