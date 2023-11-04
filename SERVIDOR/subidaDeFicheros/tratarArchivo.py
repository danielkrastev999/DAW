#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import os
import cgi
import cgitb; cgitb.enable()
import csv

tabla = []

#   Obtener los datos del archivo 
form = cgi.FieldStorage()

print("Content-Type: text/html\n")

fileitem = form["filename"]

#   Comprobar si el fichero ha sido subido
if fileitem.filename:
    #   Obtener el nombre del fichero que me han enviado
    fn = os.path.basename(fileitem.filename)

    #   Abre el fichero en el que quiero escribir y escribo el contenido del fichero temporal
    open("ficheros/"+fn, "wb").write(fileitem.file.read()) # Se puede cambiar el nombre del nuevo fichero open("img/foto_"+fn, "wb")

    with open('ficheros/'+fn, newline='') as File:  
        reader = csv.reader(File, delimiter=';')
        for fila in reader:
            tabla.append(fila)
    
#   Construye la tabla HTML
print('<table border="1" style="border-collapse: collapse; text-align: center">\n')

for fila in tabla:
    print("<tr>")
    for celda in fila:
        print('<td >' + celda + '</td>')
    print('</tr>\n')

print('</table>')

