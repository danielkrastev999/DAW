#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import codigoHTML
import json
import os
from urllib.parse import parse_qs

param = parse_qs(os.environ.get("QUERY_STRING"))

fichero_cuentas = open("datos/listaCuentas.json")

cuentas = json.load(fichero_cuentas)

fichero_cuentas.close()

# Resto o sumo saldo en función de la operación

id_cuenta = int(param["idCuenta"][0])
cant_dinero = int(param["cantDinero"][0])
operacion = param["oper"][0]

for cuenta in cuentas:
    if cuenta[0] == id_cuenta:
        if operacion == "ingresar":
            if cant_dinero < 1:
                codigoHTML.htmlErrorNumNegativo()
            else:
                cuenta[2] += cant_dinero
                codigoHTML.htmlRecargaOperacion()
        elif operacion == "retirar":
            if cant_dinero < 1:
                codigoHTML.htmlErrorNumNegativo()
            else:
                if cant_dinero > cuenta[2]:
                    codigoHTML.htmlErrorRetirada()
                else:
                    cuenta[2] -= cant_dinero
                    codigoHTML.htmlRecargaOperacion()
        break



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
