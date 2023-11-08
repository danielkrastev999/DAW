#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

from BDvideojuegos import BDVideojuegos
import HtmlVideojuegos

import sys
import os
from urllib.parse import parse_qs

param = parse_qs(os.environ.get("QUERY_STRING"))


bd = BDVideojuegos()


print("Content-type: text/html\n")


if "id" in param and param["id"][0]!="":
    #capturar el id a borrar
    id = param["id"][0]


    HtmlVideojuegos.formularioModificar(bd.seleccionaPorId(id))
else:
    HtmlVideojuegos.error("Falta el id para modificar")


#cerrar base de datos
bd.cerrarBD()
