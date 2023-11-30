#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import sys
import os
from urllib.parse import parse_qs
import mysql.connector
import sys

from ej6_BD import ej6_BD
print("Content-type: text/html\n")

param = parse_qs(os.environ.get("QUERY_STRING"))

bd = ej6_BD()

#   Compruebo que llegan todos los parametros y si llegan, que no esten vacios
if "paciente" in param and param["paciente"][0] != "" \
and "fecha_cita" in param and param["fecha_cita"][0] != "" \
and "hora_cita" in param and param["hora_cita"][0] != "" \
and "consulta" in param and param["consulta"][0] != "":
    paciente = param["paciente"][0]
    fecha_cita = param["fecha_cita"][0]
    hora_cita = param["hora_cita"][0]
    consulta = param["consulta"][0]

    
    #   llamo al metodo insertar de bd y le paso por parametros todos los datos que necesita
    #   no he hecho la parte de validar el paciente asique tampoco le puedo pasar el id, 
    #   pongo '1' para probar que funciona
    #   solo funciona con 1 y 2 ya que solo tengo dos pacientes
    bd.insertar(fecha_cita,hora_cita,consulta,1)



# comprobaciones
'''
sys.stderr.write(f"==============={paciente}=============")
sys.stderr.write(f"==============={fecha_cita}=============")
sys.stderr.write(f"==============={hora_cita}=============")
sys.stderr.write(f"==============={consulta}=============")
'''


