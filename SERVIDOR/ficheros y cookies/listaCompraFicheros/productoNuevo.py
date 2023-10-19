#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os, codigoHtml
from urllib.parse import parse_qs

#   recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

#   guardo los valores que llegan por la url
prod = param["producto"][0]
cant = param["cantidad"][0]

#   abro el fichero para escribir texto al final
fichero = open("datos/listaCompra.dat","at")

#   Si no esta vacio, escribo con un salto de linea
if os.path.getsize("datos/listaCompra.dat") != 0:
    fichero.write("\n")

#   Escribo en el fichero el producto y la cantidad
fichero.write(prod+";"+cant)

#   Cierro el fichero
fichero.close()

#   Llamo al metodo de recarga que se encuentra en el modulo codigoHtml
codigoHtml.htmlRecarga()