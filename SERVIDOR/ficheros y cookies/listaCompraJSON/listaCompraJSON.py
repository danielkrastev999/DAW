#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
import json
import codigoHtml

#   Abrir el fichero
try:
    #   abrir el fichero en modo lectura
    fichero = open("datos/listaCompra.json")
except:
    #   se crea el fichero si no existe
    fichero = open("datos/listaCompra.json", "x")


#   leemos el contenido del fichero en una lista de productos SI NO ESTA VACIO
if os.path.getsize("datos/listaCompra.json") != 0:
    productos = json.load(fichero)
else:
    productos= [] #lista vacia



#   Cerramos el fichero
fichero.close()

#   Funcion que crea una lista ordenada con los productos
def listaDeProductos():
    #   Si hay productos.. crea la lista
    if len(productos) != 0: 
        print("<ol>")
        for p in productos:
            #   Salida por pantalla formateada: 2 kilos de naranjas
            print(f"<li>{p[1]} de {p[0]}</li>")
        print("</ol>")
    #  Si la lista no tiene productos
    else:
        print("<h3>Lista de la compra vacia</3>")
    print("<hr />")


#   Creamos la cabecera HTML
codigoHtml.cabeceraHtml()

#   Crear la lista de productos
listaDeProductos()

#   Creamos el formulario
codigoHtml.formulario()

#   Creamos el fin HTML
codigoHtml.finHtml()
