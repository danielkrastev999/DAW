#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

import http.cookies, os
import funcionesHtml

#comprobar si vienen productos en la peticion get para meter en la cesta
from urllib.parse import urlparse, parse_qs
ru = os.environ.get("REQUEST_URI")
parametros = urlparse(ru)
param = parse_qs(parametros[4])

#variable que contiene el producto selecciona, 0 es que no hay producto
prod = "0"

if "prod" in param:
    prod = param["prod"][0]

print("Content-Type: text/html")
cookie = http.cookies.SimpleCookie()

#   Si no existen, crear las cookies
if os.environ.get("HTTP_COOKIE") == None:
    cookie["teclados"] = 0
    cookie["monitores"] = 0
    cookie["ratones"] = 0
    #cookie["teclados"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT"
    #cookie["monitores"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT"
    #cookie["ratones"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT"
    print(cookie)
    print()
else:
    cookie.load(os.environ.get("HTTP_COOKIE"))
    if "teclados" in cookie:
        if prod == "1": # Si el valor recibido por la URL es prod=1 -> significa que tenemos un teclado añadido
            cookie["teclados"] = int(cookie["teclados"].value) + 1
    else:
        if prod == "1":
            cookie["teclados"] = 1
        else:
            cookie["teclados"] = 0
    cookie["teclados"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT"
    if "monitores" in cookie:
        if prod == "2":
            cookie["monitores"] = int(cookie["monitores"].value) + 1
    else:
        if prod == "2":
            cookie["monitores"] = 1
        else:
            cookie["monitores"] = 0
    cookie["monitores"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT"
    if "ratones" in cookie:
        if prod == "3":
            cookie["ratones"] = int(cookie["ratones"].value) + 1
    else:
        if prod == "3":
            cookie["ratones"] = 1
        else:
            cookie["ratones"] = 0
    cookie["ratones"]["expires"] = "Wed, 11 Oct 2024 07:28:00 GMT"                
    print(cookie)
    print()

funcionesHtml.cabeceraHtml()

print("<p>"+prod+"</p>")

print('<a href="cestaCompra.py?prod=1">Aniadir teclado a la cesta</a><br />')
print('<a href="cestaCompra.py?prod=2">Aniadir monitor a la cesta</a><br />')
print('<a href="cestaCompra.py?prod=3">Aniadir raton a la cesta</a><br />')
print('<br />')
print('<a href="verCestaCompra.py">Ver la cesta</a><br />')


funcionesHtml.finHtml()