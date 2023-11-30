#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

#   Realizamos los imports necesarios, incluyendo el del modulo codigoHTML
import codigoHTML
import json
import hashlib
import os
from urllib.parse import parse_qs

#   Guardamos en param los valores traidos por el method get
param = parse_qs(os.environ.get("QUERY_STRING"))

#   0. GUARDO LA RUTA DEL JSON EN UNA VARIABLE  
ficheroUsuarios = "datos/usuarios.json"


######################################################################################################
# validar que nos envia los parametros 
#   que existen
#   que contienen algo
#   que cumplen X requisitos: ej: que la password sea de mas de 4 caracteres

# el objetivo es guardar el nuevo usuario en el fichero de usuarios.json


#               PASOS
# 1. Abrir el fichero de usuarios -> JSON
# 2. Comprobar que el usuario no existe en usuarios.json
#       si no existe lo añadimos y volvemos a la pagina principal
#       si existe, ir a la pagina de error
#
##        Formato de la estructura de datos para la lista de usuarios 
#   [["usuario","1234",usu1@miempresa.com],["usuario2","5678",usu2@gmail.com]] 
#
#   Comprobaciones: Si el nombre de user existe, que la contraseña sea +4 caracteres y que el email no se repita
#
#
#   Crear codigo html en .py
######################################################################################################

#   Funcion de validacion de parametros ! (dentro el paso 1, 2 y 3)
def validarParametros():

    #   1. COMPROBAR QUE VIENEN TODOS LOS PARAMETROS
    if "nombre" not in param:
        codigoHTML.Error("Falta el nombre")
        exit() 
    if "password" not in param:
        codigoHTML.Error("Falta la contraseña")
        exit()
    if "email" not in param:
        codigoHTML.Error("Falta el email")
        exit()   

    #   2. GUARDAMOS LOS DATOS EN LAS VARIABLES
    nombre = param["nombre"][0]
    password = param["password"][0]
    email = param["email"][0]
    
    #   3. COMROBAMOS QUE LOS CAMPOS NO ESTAN VACIOS Y ALGUNA COMPROBACION EXTRA
    if nombre == "":
        codigoHTML.Error("El nombre tiene que tener algo")
        exit()
    if password == "" or len(password) < 5: # comprobamos si esta vacia la contraseña o tiene menos de 5 caracteres
        codigoHTML.Error("Error en la contraseña, minimo 5 caracteres")
        exit()
    if email == "" or email.count("@") != 1:
        codigoHTML.Error("El email tiene que tener algo o tener un formato de email")
        exit()

    #   8. ENCRIPTACION DE LA CONTRASEÑA
    #       El password lo paso por un metodo de string, llamado encode, lo que hace es, 
    #       convertirlo en una codificacion ascii con la que pueda trabajar la libreria hashlib.sha512
    passEncriptado = hashlib.sha512(str.encode(password)).hexdigest()

    #   4. DEVUELVO LAS VARIABLES DE LA URL CONVERTIDOS A UNA LISTA
    return [nombre,passEncriptado,email]

#   7. COMPROBAR QUE EL FICHERO  EXISTE, SINO CREARLO CON UNA LISTA VACIA
def comprobarFichero():

    #   7.1 ABRIR EL FICHERO (si no existe, me da una excepcion)
    #   Abrir el fichero
    try:
        #   Abrir el fichero en modo escritura al final
        fichero = open(ficheroUsuarios,"a")
    #   CREO EL FICHERO
    except:
        #   Se crea el fichero si no existe
        fichero = open(ficheroUsuarios, "x")

    #   7.2 COMRPUEBO SI ESTA VACIO, SI LO ESTA, CREO UNA LISTA !
    #   Leemos el contenido del fichero en una lista de usuarios si esta vacio
    if os.path.getsize("datos/listaCuentas.json") == 0:
        fichero.write("[]")

    #   7.3 CERRAMOS EL FICHERO
    fichero.close()





#   5. SE VALIDAD LOS PARAMENTROS Y SE GUARDAN COMO LISTA EN USUARIO
usuario = validarParametros() # entre corchetes pars que devuelva una Lista y no una Tupla


#       6. ABRIR FICHERO Y ESCRIBIR EN JSON
#   with open se encarga de abrir y cerrar el fichero directamente


#   6.1 CARGAMOS EL FICHERO JSON DENTRO DE 'listaUsuarios'
with open (ficheroUsuarios) as fichero:
    #6.1.1 SI DENTRO DE LA listaUsuarios, HAY ALGO QUE NO SEA UNA LISTA
    try:
        listaUsuarios = json.load(fichero)
    except:
        listaUsuarios = []

#   6.1.2 REALIZAMOS COMPROBACIONES
#   print(usuario)
#   print(listaUsuarios)


usuarioNoEncontrado = True

#   6.2 RECORRO TODOS LOS USUARIOS PARA VER SI EL NOMBRE YA EXISTE
for usu in listaUsuarios:
    if usu[0] == usuario[0]: # comprobando el usuario, si es el email usu[2] == usuario[2]
        #   6.2.1 SI ES IGUAL, PONGO LA VARIABLE EN FALSE
        usuarioNoEncontrado = False


#   6.3. COMPROBAR QUE EL USUARIO NO SE REPITE
if usuarioNoEncontrado:
    #   6.3.1 AÑADIR EL NUEVO USUARIO A 'listaUsuarios'
    listaUsuarios.append(usuario)
else:
    codigoHTML.Error("Usuario repetido")
    exit()



#   6.4 ESCRIBIMOS EN EL FICHERO, LA LISTA DE USUARIOS
with open (ficheroUsuarios,"w") as fichero:
    json.dump(listaUsuarios, fichero)




# SI TOD0 ESTA CORRECTO MUESTRA ESTE MENSAJE

codigoHTML.Correcto()