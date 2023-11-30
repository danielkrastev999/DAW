#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe



import os,json
from urllib.parse import urlparse, parse_qs


from BDvideojuegos import BDVideojuegos


print("Content-type: application/json\n")


ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])


#acceder a la base de datos
bd = BDVideojuegos()


if "nombre" in param and param["nombre"][0]!="" \
    and "empresa" in param and param["empresa"][0]!="" \
    and "tematica" in param and param["tematica"][0]!="" \
    and "numero_de_jugadores" in param and param["numero_de_jugadores"][0]!="" \
    and "publicacion" in param and param["publicacion"][0]!="":
    #capturar los datos a insertar
    nombre = param["nombre"][0]
    empresa = param["empresa"][0]
    tematica = param["tematica"][0]
    numero_de_jugadores = param["numero_de_jugadores"][0]
    publicacion = param["publicacion"][0]


    #borrar de la base de datos
    bd.insertar(nombre,empresa,tematica,numero_de_jugadores,publicacion)
    print(json.dumps(True))

else:
    print(json.dumps(False))


#cerrar base de datos
bd.cerrarBD()
