#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

from BDvideojuegos import BDVideojuegos
import HtmlVideojuegos

import sys
import os
from urllib.parse import parse_qs

print("Content-type: text/html\n")

param = parse_qs(os.environ.get("QUERY_STRING"))

# acceder a la base de datos
bd = BDVideojuegos()

if "nombre" in param and param["nombre"][0] != "" \
and "empresa" in param and param["empresa"][0] != "" \
and "tematica" in param and param["tematica"][0] != ""\
and "numero_de_jugadores" in param and param["numero_de_jugadores"][0] != "" \
and "publicacion" in param and param["publicacion"][0] != "" :
    # capturar los datos a insetar
    nombre = param["nombre"][0]
    empresa = param["empresa"][0]
    tematica = param["tematica"][0]
    numero_de_jugadores = param["numero_de_jugadores"][0]
    publicacion = param["publicacion"][0]
    
    # Insertar en la base de datos
    bd.insertar(nombre,empresa,tematica,numero_de_jugadores,publicacion)

    #   Vuelvo a mostrar todos los videojuegoss
    HtmlVideojuegos.error("Datos Insertados")

else:
    HtmlVideojuegos.error("Algun parametro no es correcto jejej")




# cerrar conexion base de datos
bd.cerrarBD()