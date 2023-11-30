#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os, codigoHtml


#   Abrir el fichero
try:
    #   abrir el fichero en modo lectura
    fichero = open("datos/listaCompra.dat")
except:
    #   se crea el fichero si no existe
    fichero = open("datos/listaCompra.dat", "x")


#   leemos el contenido del fichero en una lista de productos SI NO ESTA VACIO
if os.path.getsize("datos/listaCompra.dat") != 0:
    productos = fichero.readlines() 
else:
    productos= [] #lista vacia



#   cerramos el fichero
fichero.close()

#   Funcion que crea una lista ordenada con los productos
def listaDeProductos():
    #   Si hay productos.. crea la lista
    if len(productos) != 0: 
        print("<ol>")
        # Antes de poner cada elemento se quita el \n con un for resumido
        prod = [p.strip('\n') for p in productos] 
        # Bucle for de prod, lista que tiene los productos pero sin \n
        for p in prod:
            #   Hago un split de prod por la ; y los meto en una lista llamada elemento 
            elemento = p.split(";") 
            #   Salida por pantalla formateada: 2 kilos de naranjas
            print(f"<li>{elemento[1]} de {elemento[0]}</li>")
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
