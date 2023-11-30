#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

import json
import codigoHtml

print("Content-type: text/html\n")

import os
from urllib.parse import parse_qs

#   recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

#   guardo los valores que llegan por la url a una lista con dos elementos
prod = [param["producto"][0],param["cantidad"][0]]


#   abro el fichero para lectura
fichero = open("datos/listaCompra.json")

#   Si no esta vacio, escribo con un salto de linea
if os.path.getsize("datos/listaCompra.json") == 0:
    #   Una lista que solo va a tener ese producto [["aguacate", "4 kilos"]]
    listaProductos = [prod]
    #   convertir algo en formato JSON
    listaJson = json.dumps(listaProductos)

else:
    fichero = open("datos/listaCompra.json")
    #   leer el contenido del fichero y si lo que leo cumple las normas JSON
    #   lo convierto en un JSON

    #   coger fichero, leerlo y lo convierte en lista de productos
    listaProductos = json.load(fichero) 

    listaProductos.append(prod) # a esa lista de productos, le añado el producto

    #   lo convierto en un JSON y esa listaJSON es la que guardo
    listaJson = json.dumps(listaProductos)




fichero = open("datos/listaCompra.json","wt")
fichero.write(listaJson)
fichero.close()

#   Cierro el fichero
fichero.close()

#   Llamo al metodo de recarga que se encuentra en el modulo codigoHtml
codigoHtml.htmlRecarga()