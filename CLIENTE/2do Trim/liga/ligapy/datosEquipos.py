#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import cgi
import json

# Lista de nombres de equipos y sus datos asociados
datos_equipos = {
    "Real Madrid": {"Fundación": 1902, "Estadio": "Santiago Cuernabeu"},
    "FC Barcelona": {"Fundación": 1899, "Estadio": "Camp Nou"},
    "Atletico Madrid": {"Fundación": 1903, "Estadio": "Wanda Metropolitano"},
    "Valencia CF": {"Fundación": 1919, "Estadio": "Mestalla"},
    "Sevilla FC": {"Fundación": 1890, "Estadio": "Ramón Sánchez-Pizjuán"}
}

# Obtener el nombre del equipo de la solicitud GET
parametros = cgi.FieldStorage()
equipo_solicitado = parametros.getvalue("equipo")

# Verificar si el equipo solicitado está en la lista
if equipo_solicitado in datos_equipos:
    datos_equipo = datos_equipos[equipo_solicitado]
else:
    datos_equipo = {"error": "Equipo no encontrado"}

# Configurar la respuesta HTTP
print("Content-type: application/json\n")
print(json.dumps(datos_equipo, indent=2))