#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import os
import cgi
import cgitb; cgitb.enable()

#   Obtener los datos del archivo 
form = cgi.FieldStorage()

print("Content-Type: text/html\n")

fileitem = form["filename"]

#   Comprobar si el fichero ha sido subido
if fileitem.filename:
    #   Obtener el nombre del fichero que me han enviado
    fn = os.path.basename(fileitem.filename)

    #   Escribo en ese fichero el contenido que se ha subido
    open("img/"+fn, "wb").write(fileitem.file.read()) # Se puede cambiar el nombre del nuevo fichero open("img/foto_"+fn, "wb")

    print('<img src="img/ '+ fn +' "> ') # si cambiamos el nombre arriba, aqui tambien hay que hacerlo:print('<img src="img/foto: '+ fn +' "> ')


