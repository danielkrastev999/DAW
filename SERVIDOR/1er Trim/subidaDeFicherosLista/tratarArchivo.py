#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import os
import cgi
import cgitb; cgitb.enable()
import csv


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
        reader = csv.reader(File, delimiter=',') 
        saldoLinea = reader
        for linea in reader:
            #   Imprimir el primer elemento como <h2>
            print(f'<h2>{linea[0]}</h2>')
            print('<ol>') # Creo la etiqueta de inicio de la lista ordenada
            for ciudad in linea[1:]:  # Excluir el primer elemento
                print(f'<li>{ciudad}</li>')
    print('</ol>')