#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

#   Realizamos los imports necesarios, incluyendo el del modulo codigoHTML
import codigoHTML
import json
import os
from urllib.parse import parse_qs

#   Guardamos en param los valores traidos por el method get
param = parse_qs(os.environ.get("QUERY_STRING"))

#   Abrir el fichero
try:
    #   Abrir el fichero en modo lectura
    fichero_cuentas = open("datos/listaCuentas.json")
except:
    #   Se crea el fichero si no existe
    fichero_cuentas = open("datos/listaCuentas.json", "x")

#   Leemos el contenido del fichero en una lista de cuentas SI NO ESTA VACIO
if os.path.getsize("datos/listaCuentas.json") != 0:
    cuentas = json.load(fichero_cuentas)
else:
    cuentas = [] #  Sino creamos una lista vacia

#   Cerramos el fichero
fichero_cuentas.close()

#   Guardamos los valores traidos por la URL con la referencia "name" que teniamos 
#   en el form del html y lo guardamos en variables
id_cuenta = param["idCuenta"][0]
cant_dinero = int(param["cantDinero"][0])
operacion = param["oper"][0]

#   Para cada cuenta en el array de cuentas

#   Si el id de la cuenta es "eligeCuenta" (opcion default del select), da error, selecciona una
if id_cuenta != "eligeCuenta":
    for cuenta in cuentas:
        if cuenta[0] == int(id_cuenta): #    Si el id de la cuenta es igual que el que heos traido
            if operacion == "ingresar": #   Si operacion es "ingresar" (de la url tambien)
                if cant_dinero < 1:#    Si la cantidad es menor que 1
                    codigoHTML.htmlErrorNumNegativo() # Llamamos a un html que muestra un mensaje de error por numero negativo o 0
                else:
                    cuenta[2] += cant_dinero #  Sumamos el saldo introducido al saldo de la cuenta
                    codigoHTML.htmlRecargaOperacion() # Recargamos la pagina mostrando un mensaje de operacion realizada
            elif operacion == "retirar": #  Si la operacion es "retirar"
                if cant_dinero < 1: #   Si la cantidad es menor que 0 o negativo
                    codigoHTML.htmlErrorNumNegativo() # Pagina de error de nuevo
                else:
                    if cant_dinero > cuenta[2]: #   Si la cantidad a retirar es mayor que el sado en la cuenta
                        codigoHTML.htmlErrorRetirada() #    Mensaje de error por listillo
                    else:
                        cuenta[2] -= cant_dinero #  Si todo esta correcto, restamos la cantidad a retirar del saldo de la cuenta
                        codigoHTML.htmlRecargaOperacion() # Mensaje de operacion realizada
            break
else:
    codigoHTML.htmlErrorSeleccionCuenta()


# Registro del movimiento en un archivo JSON dedicado a la cuenta
movimiento = {"operacion": operacion,"cantidad": cant_dinero,"saldo_actual": cuenta[2]}

# Verifica si el movimiento es válido antes de registrarlo
if (operacion == "ingresar" and cant_dinero > 0) or (operacion == "retirar" and cant_dinero > 0 and cant_dinero <= cuenta[2]):
    # Nombre del archivo de registro es el ID de la cuenta
    fichero_movimientos = f"datos/movimientos_cuenta_{cuenta[0]}.json"


# Intenta abrir el archivo en modo lectura si existe, de lo contrario, crea uno nuevo
try:
    fichero = open(fichero_movimientos)
except FileNotFoundError:
    #   Se crea el fichero si no existe
    fichero = open(fichero_movimientos, "x")

#   leemos el contenido del fichero en una lista de cuentas SI NO ESTA VACIO
if os.path.getsize(fichero_movimientos) != 0:
    movimientos = json.load(fichero)
else:
    movimientos = [] #lista vacia


#   añadimos el movimiento actual a la lista de movimientos
movimientos.append(movimiento)




# Actualiza el archivo de movimientos
fichero = open(fichero_movimientos, "w")
json.dump(movimientos, fichero)
fichero.close()


# Actualizo el archivo de cuentas
fichero_cuentas = open("datos/listaCuentas.json", "w")
json.dump(cuentas, fichero_cuentas)
fichero_cuentas.close()
