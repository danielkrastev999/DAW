#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
import json
import codigoHTML
from urllib.parse import parse_qs
param = parse_qs(os.environ.get("QUERY_STRING"))

id = param["id"][0]

# Nombre del archivo de registro es el ID de la cuenta
fichero_movimientos = f"datos/movimientos_cuenta_{id}.json"

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

fichero.close()


#-----------------
listaCuentas = "datos/listaCuentas.json"

# Intenta abrir el archivo en modo lectura si existe, de lo contrario, crea uno nuevo
try:
    fichero = open(listaCuentas)
except FileNotFoundError:
    #   Se crea el fichero si no existe
    fichero = open(listaCuentas, "x")

#   leemos el contenido del fichero en una lista de cuentas SI NO ESTA VACIO
if os.path.getsize(listaCuentas) != 0:
    cuentas = json.load(fichero)
else:
    cuentas = [] #lista vacia

fichero.close()




def listaOpraciones():
   
    if len(movimientos) != 0:
        for mov in reversed(movimientos):
            if mov['operacion'] == "ingresar":
                print(f"""
                    <tr> 
                    <td style='color: green;'>Has realizado un ingreso de {mov['cantidad']}$</td>
                    <td>{mov['saldo_actual']} $</td>
                    <tr>
                """)

            else:
                print(f"""
                    <tr> 
                    <td style='color: red;'>Has retirado {mov['cantidad']}$</td>
                    <td>{mov['saldo_actual']} $</td>
                    <tr>
                """)

    else: 
        print(f"""
            <td>No has realizado operaciones operaciones todavia</td>
            <td><td>{mov['saldo_actual']}</td></td>
        """)


def numAcc():
    if len(cuentas) != 0:
        for cuenta in cuentas:
            if str(id) == str(cuenta[0]):
                print(f"""
                        <div class="containerIngresarRetirar"
                            <h3>De tu cuenta: </h3>
                            <h3>{cuenta[1]}</h3>
                        </div>
                    """)




codigoHTML.inicioVerCuenta()

numAcc()

codigoHTML.medioVerCuenta()

listaOpraciones()

codigoHTML.finalVerCuenta()