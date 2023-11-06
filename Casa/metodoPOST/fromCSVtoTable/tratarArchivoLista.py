#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

import os
import cgi
import cgitb
import csv

def procesarArchivoCSV(filename):
    print("Content-Type: text/html\n")

    with open('ficheros/' + filename, newline='') as File:  
        reader = csv.reader(File, delimiter=',')
        for linea in reader:
            # Imprimir el primer elemento como <h2>
            print(f'<h2>{linea[0]}</h2>')
            print('<ol>')  # Creo la etiqueta de inicio de la lista ordenada
            for ciudad in linea[1:]:  # Excluir el primer elemento
                print(f'<li>{ciudad}</li>')
        print('</ol>')



# Obtener los datos del archivo 
form = cgi.FieldStorage()
fileitem = form["filename"]

# Comprobar si el fichero ha sido subido
if fileitem.filename:
    fn = os.path.basename(fileitem.filename)
    # Escribir el contenido del archivo subido en un nuevo archivo en el directorio "ficheros"
    with open("ficheros/" + fn, "wb") as newfile:
        newfile.write(fileitem.file.read())

    
    # Llamar a la función para procesar el archivo CSV
    procesarArchivoCSV(fn)