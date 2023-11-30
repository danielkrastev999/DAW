#!C:\Users\Kras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\python.exe

import os
import json
from urllib.parse import parse_qs

# Obtener los parámetros que envía el formulario
parametros = parse_qs(os.environ.get('QUERY_STRING'))

def validar_parametros():
    # Comprobar que se hayan pasado los parámetros y devolverlos
    nombre = parametros.get("nombre", [""])[0]
    edad = parametros.get("edad", [""])[0]
    ciudad = parametros.get("ciudad", [""])[0]

    return nombre, edad, ciudad

# Validar los parámetros
cuenta = validar_parametros()


# Comprueba la existencia del fichero y que no esté vacío

with open("data.json", "r") as file:
    # Abre el fichero en modo lectura
    try:
        # Prueba a cargar el fichero json
        lista_cuentas = json.load(file)
    except:
        # Si está vacío crea una lista vacía
        lista_cuentas = []

lista_cuentas.append(cuenta)
# Añade la nueva cuenta a la lista de cuentas

with open("data.json", "wt") as file:
    # Abre el fichero en modo sobreescritura
    json.dump(lista_cuentas, file)
    # Guarda la lista de cuentas en formato json en el fichero
