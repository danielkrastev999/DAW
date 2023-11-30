#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

#print("Content-type: text/html\n") SE QUITA PARA QUE FUNCIONE LA COOKIE

#   Realizamos los imports necesarios, incluyendo el del modulo codigoHTML
import codigoHTML
import json
import hashlib
import http.cookies
import uuid
import os
from urllib.parse import parse_qs

#   Guardamos en param los valores traidos por el method get
param = parse_qs(os.environ.get("QUERY_STRING"))

#   0. GUARDO LA RUTA DEL JSON EN UNA VARIABLE  
ficheroUsuarios = "datos/usuarios.json"

#######################################

# No hace falta validar 

#######################################

#   1. COMPROBAR QUE VIENEN TODOS LOS PARAMETROS
if "nombre" not in param:
    codigoHTML.Error("Falta el nombre")
    exit() 
if "password" not in param:
    codigoHTML.Error("Falta la contraseña")
    exit()

#   2. GUARDAMOS LOS DATOS EN LAS VARIABLES
nombre = param["nombre"][0]
password = param["password"][0]

#   2.1 Encriptamos contraseña para compararla con la que tenemos guardada en el fichero
passEncriptado = hashlib.sha512(str.encode(password)).hexdigest()

#   3 CARGAMOS EL FICHERO JSON DENTRO DE 'listaUsuarios'
with open (ficheroUsuarios) as fichero:
    #   3.1 SI DENTRO DE LA listaUsuarios, HAY ALGO QUE NO SEA UNA LISTA
    try:
        listaUsuarios = json.load(fichero)
    except:
        listaUsuarios = []


#   de momento no tenemos usuario
usuarioEncontrado = False

#   4. RECORRO TODOS LOS USUARIOS PARA VER SI TENGO ESE USUARIO 
#      Y SI LO TENGO, COMPRUEBO SI LA CONTRASEÑA ES IGUAL
for usu in listaUsuarios:
    if usu[0] == nombre and usu[1] == passEncriptado:
        usuarioEncontrado = True 
        break # si no pongo el break, se queda registrada en usu, el ultimo usuario, no el que he encontrado que es igual

#   5. Comprobar si el usuario no se encontro para sacar el mensaje de error
if not usuarioEncontrado:
        codigoHTML.Error("Usuario no encontrado o password incorrecta")
        exit()

##################################################################
#manolo malone melon
#   INICIO DE LAS COOKIES

print("Content-type: text/html")
cookie = http.cookies.SimpleCookie() 
cookie["ID1"] = uuid.uuid4() # lo que tendra la cookie dentro (genera ids aleatorios)

print(cookie)
print()

##################################################################

# DONDE IR SI HACE LOGIN EL USUARIO
codigoHTML.irAPagina1()