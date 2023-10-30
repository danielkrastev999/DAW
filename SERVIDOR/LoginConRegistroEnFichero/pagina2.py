#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import codigoHTML
import http.cookies
import os

#   Comprobar que el usuario tiene la cookie
#   si la tiene puede entrar, sino no


#   1. COMPROBAMOS SI SE RECIBE ALGUNA, SI NO HAY COOKIES -> ERROR Y EXIT
if os.environ.get("HTTP_COOKIE") == None:
    codigoHTML.Error("No estas logeado en el sistema")
    exit()

#   2. CREAMOS LA COOKIE
cookie = http.cookies.SimpleCookie()

#   3. CARGAMOS LA COOKIE
cookie.load(os.environ.get("HTTP_COOKIE"))

#   4. COMPROBAR SI LA COOKIE QUE BUSCAMOS ESTÁ
if "ID1" in cookie:
    codigoHTML.Aplicacion("estas en la pagina 2","pagina1.py")
else:
    codigoHTML.Error("No estas logeado en el sistema")

#
#   boton de log out para que el usuario pueda salir