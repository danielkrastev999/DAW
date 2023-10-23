#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import json
import codigoHTML
import os
import random


def generar_iban():
    
    # Identificación del país (ES para España)
    iban = "ES"
    
    
    for _ in range(20):
        digito = random.randint(0, 9)
        iban += str(digito)
    
    return iban

# Abro el fichero JSON para lectura
fichero = open("datos/listaCuentas.json")

# Verificar si el archivo JSON está vacío
if os.path.getsize("datos/listaCuentas.json") == 0:
    # Si el archivo está vacío, establece el ID en 1
    id = 1
else:
    # Si no está vacío, lee el JSON y obtén el último ID existente
    listaCuentas = json.load(fichero)
    id = listaCuentas[-1][0] + 1

#   Guardo en numAcc el numero generado en la funcion generar_iban()
numAcc = generar_iban() 
saldo = 0

fullAcc = [id,numAcc,saldo]

#   abro el fichero json para lectura
fichero = open("datos/listaCuentas.json")


#   Si no esta vacio, escribo con un salto de linea
if os.path.getsize("datos/listaCuentas.json") == 0:
    #   Convertir la cuenta creada en formato JSON
    listaJson = json.dumps([fullAcc])

else:
    #   Leer el contenido del fichero y si lo que leo cumple las normas JSON
    #   lo convierto en un JSON
    fichero = open("datos/listaCuentas.json")

    #   Coger fichero, leerlo y lo convierte en lista de cuentas
    listaCuentas = json.load(fichero) 

    listaCuentas.append(fullAcc) # a esa lista de cuentas, le añado numAcc, la nueva cuenta

    #   lo convierto en un JSON y esa listaJSON es la que guardo
    listaJson = json.dumps(listaCuentas)




fichero = open("datos/listaCuentas.json","wt")
fichero.write(listaJson)
fichero.close()

#   Cierro el fichero
fichero.close()


#   Llamo al metodo de recarga que se encuentra en el modulo codigoHtml
codigoHTML.htmlRecargaCrearCuenta()

codigoHTML.finalHTML()