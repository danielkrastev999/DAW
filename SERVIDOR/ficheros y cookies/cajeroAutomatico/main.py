#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os
import json
import codigoHTML

#   Abrir el fichero
try:
    #   Abrir el fichero en modo lectura
    fichero = open("datos/listaCuentas.json")
except:
    #   Se crea el fichero si no existe
    fichero = open("datos/listaCuentas.json", "x")

#   leemos el contenido del fichero en una lista de cuentas SI NO ESTA VACIO
if os.path.getsize("datos/listaCuentas.json") != 0:
    cuentas = json.load(fichero)
else:
    cuentas = [] #lista vacia

#   Cerramos el fichero
fichero.close()


    

def listaCuentas():
    #   Si hay cuentas, crea la lista
    if len(cuentas) != 0:
        
        for cuenta in cuentas:
            print(f"""
                <tr> 
                <td>{cuenta[0]}</td>
                <td>{cuenta[1]}</td>
                <td>{cuenta[2]}</td>
                <td>
                <form action="verCuenta.py" method="get">
                    <input type="hidden" name="id" value="{cuenta[0]}">
                    <input class="botonVerCuenta" type="submit" value="Ver cuenta {cuenta[0]}">
                </form>
                </td>
               </tr>
            """)
    else:
        print("""
            <td></td>
            <td>No existen cuentas todavia</td>
            <td></td>
            <td></td>
        """)


def elegirCuenta():
    if len(cuentas) != 0:
        for cuenta in cuentas:
            print(f"""
                <option value="{cuenta[0]}">ID {cuenta[0]}</option>
            """)


codigoHTML.inicioHTML()

codigoHTML.inicioTabla()

listaCuentas()

codigoHTML.finalTabla()

codigoHTML.crearCuenta()

codigoHTML.inicioElegirCuenta()

elegirCuenta()

codigoHTML.finalElegirCuenta()

codigoHTML.ingresarRetirar()

codigoHTML.finalHTML()

