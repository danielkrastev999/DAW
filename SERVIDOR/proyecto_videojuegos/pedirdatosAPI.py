#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import json
from BDvideojuegos import BDVideojuegos

# libreria que trabaja con datos, no suele generar formatos
# lo que buscamos es que esta funcion nos devuelva una lista de datos

#   Generar salida para el cliente AJAX
print("Content-Type: application/json\n")

bd = BDVideojuegos()

mi_resultado = bd.todosLosVideojuegos()


#convierto mi_resultado en JSON
print(json.dumps(mi_resultado)) # En JS sera un Array de Arrays

bd.cerrarBD()