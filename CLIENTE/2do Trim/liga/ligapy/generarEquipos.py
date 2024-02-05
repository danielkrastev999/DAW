#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import json

# Lista de nombres de equipos
equipos = ["FC Barcelona", "Real Madrid", "Atletico Madrid", "Valencia CF", "Sevilla FC"]

# Crear un diccionario con la información
liga_espanola = {"equipos": equipos}

# Convertir el diccionario a formato JSON
json_liga_espanola = json.dumps(liga_espanola, indent=2)

# Establecer el tipo de contenido en la cabecera para indicar que es JSON
print("Content-Type: application/json\n")

 # Imprimir solo el JSON
print(json_liga_espanola)

