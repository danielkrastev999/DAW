#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import json
import codigoHTML

print("Content-type: text/html\n")

import os
import random


def generar_iban():
    # Identificación del país (ES para España)
    iban = "ES"
    
    
    for _ in range(20):
        digito = random.randint(0, 9)
        iban += str(digito)
    
    return iban


#   guardo los valores que llegan por la url a una lista con dos elementos
prod = generar_iban()


#   abro el fichero para lectura
fichero = open("datos/listaCuentas.json")

#   Si no esta vacio, escribo con un salto de linea
if os.path.getsize("datos/listaCuentas.json") == 0:
    #   Una lista que solo va a tener ese producto [["aguacate", "4 kilos"]]
    listaCuentas = [prod]
    #   convertir algo en formato JSON
    listaJson = json.dumps(listaCuentas)

else:
    fichero = open("datos/listaCuentas.json")
    #   leer el contenido del fichero y si lo que leo cumple las normas JSON
    #   lo convierto en un JSON

    #   coger fichero, leerlo y lo convierte en lista de productos
    listaCuentas = json.load(fichero) 

    listaCuentas.append(prod) # a esa lista de productos, le añado el producto

    #   lo convierto en un JSON y esa listaJSON es la que guardo
    listaJson = json.dumps(listaCuentas)




fichero = open("datos/listaCuentas.json","wt")
fichero.write(listaJson)
fichero.close()

#   Cierro el fichero
fichero.close()


#   Llamo al metodo de recarga que se encuentra en el modulo codigoHtml
codigoHTML.htmlRecarga()
codigoHTML.finalHTML()