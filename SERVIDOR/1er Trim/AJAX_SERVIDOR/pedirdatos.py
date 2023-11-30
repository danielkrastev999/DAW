#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import sys
import json
import mysql.connector

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

###################### hasta aqui es igual para insert que para consulta ################################

#   Crear el texto de la consulta
consulta = "SELECT * FROM datos"
#   Ejecutar la consulta
mi_cursor.execute(consulta)

#   Obtener las filas de las consulta y guardar en la variable
mi_resultado = mi_cursor.fetchall() #   fetchall() -> Devuelve lista de tuplas [(,),(,),(,)]

#   Traza para ver el objeto mi_resultado en el error log
sys.stderr.write(str(mi_resultado))

#   Cerramos el cursor y la conexion con la base de datos
mi_cursor.close()
midb.close()



#---------------------------------------------------------------------------
#   Generar salida para el cliente AJAX
print("Content-Type: application/json\n")

#convierto mi_resultado en JSON
print(json.dumps(mi_resultado)) # En JS sera un Array de Arrays

#---------------------------------------------------------------------------

#   Mensajes de error que escribo yo en el error log al salir
sys.stderr.write("Fin de pedirdatos.py\n")

