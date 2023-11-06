#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import sys
import json
import mysql.connector
import os 
from urllib.parse import urlparse, unquote, parse_qs

#   recuperar datos desde html para poder guardarlos en variables
ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

t = param["texto"][0]
n = param["numero"][0]

#   Mensajes de error que escribo yo en el error log al entrar
sys.stderr.write("Dentro de pedirdatos.py --------------------- \n")
#---------------------------------------------------------------------------
#               Consulta a la base de datos

#   Crear la conexion
midb = mysql.connector.connect( 
    host="localhost",
    user="pruebaAjax",
    password="pruebaAjax",
    database="pruebaAjax"
)

#   cursor: objeto para generar peticiones a la base de datos
mi_cursor = midb.cursor() 

#   Crear el texto de la consulta
insert = f'INSERT INTO datos (dato1, dato2) VALUES ("{t}",{n})'


#   Ejecutar el insert
mi_cursor.execute(insert)

#   Obligatorio el commit
midb.commit()


#   Cerramos el cursor y la conexion con la base de datos
mi_cursor.close()
midb.close()



#---------------------------------------------------------------------------
#   Generar salida para el cliente AJAX

print("Content-Type: application/json\n")

#convierto mi_resultado en JSON
print(json.dumps("ok")) # En JS sera un Array de Arrays

#---------------------------------------------------------------------------

#   Mensajes de error que escribo yo en el error log al salir
sys.stderr.write("Fin de insertadatos.py ------------------------- !!!!!!!!!!!!!!!!\n")
