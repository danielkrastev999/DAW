#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

#   Importo todo lo necesario 
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

#   Leemos el contenido del fichero en una lista de cuentas SI NO ESTA VACIO
if os.path.getsize("datos/listaCuentas.json") != 0:
    cuentas = json.load(fichero)
else:
    cuentas = [] #  Sino creamos una lista vacia

#   Cerramos el fichero
fichero.close()


    
#   Método para listar las cuentas dentro de la tabla 
def listaCuentas():
    #   Si hay cuentas, crea los elemntos dentro de la tabla
    if len(cuentas) != 0:
        #   Por cada cuenta dentro de la lista Cuentas.. 
        for cuenta in cuentas:
            #   Con al f delante, ponemos formato al texto y podemos rellenarlo con datos
            #   en este caso, añado el id, el numero de cuenta y el saldo
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
    else: #     Si no existe ninguna cuenta, muestra una fila de la tabla diciendo que no existen cuentas
        print("""
            <td></td>
            <td>No existen cuentas todavia</td>
            <td></td>
            <td></td>
        """)

#   Elegir la cuenta con la que deseas operar
def elegirCuenta():
    #   Si la longitud de cuentas es diferente a 0 
    if len(cuentas) != 0:
        #   Recorremos todas las cuentas y mostramos los ids de cada una de ellas
        for cuenta in cuentas:
            print(f"""
                <option value="{cuenta[0]}">ID {cuenta[0]}</option>
            """)

#   Pintamos el codigo y realizamos las llamadas a las funciones en los lugares adecuados

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

