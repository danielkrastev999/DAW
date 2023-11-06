#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

import os
import cgi
import cgitb; cgitb.enable()
import csv


print("Content-Type: text/html\n")


def guardarDatosCSV():
    #   Obtener los datos del archivo 
    form = cgi.FieldStorage()

    fileitem = form["filename"]

    #   Comprobar si el fichero ha sido subido
    if fileitem.filename:
        #   Obtener el nombre del fichero que me han enviado
        fn = os.path.basename(fileitem.filename)

        # Escribir el contenido del archivo subido en un nuevo archivo en el directorio "ficheros"
        with open("ficheros/" + fn, "wb") as newfile:
            newfile.write(fileitem.file.read())

        #   Metodo para leer y separar la infomracion de un CSV, almacenando cada linea en una lista, y esta dentro de una lista general
        with open('ficheros/'+fn, newline='') as File:  
            reader = csv.reader(File, delimiter=';')
            data = list(reader)

        return data    
    return[]

data = guardarDatosCSV()

###############################################################################

# TABLA COMPLETA

# empiezo a pintar la tabla
print("<table border='1' style='border-collapse:collapse; text-align:center;'>") 

for fila in data:# Recorro cada lista dentro de la lista general
    print("<tr>") # Pinto un tr
    for celda in fila: #    Recorro el contenido de las lista 
        print(f"<td>{celda}</td>") #    Pinto un cada contenido de la lista dentro de un td y cierro
    print("</tr>") #    Cierro el tr y vuelvo a empezar

print("</table>")  #    Finaliza la tabla

print("<br />")


# SOLO NOMBRES DE EQUIPOS Y PUNTOS  ----- lista y tabla 
###############################################################################

# LISTA DEL PRIMER Y ULTIMO CAMPO

print("<ul>")  # Empiezo a pintar la lista desordenada (ul)
print("<li style='font-weight: bold'>EQUIPO : PUNTOS</li>")

for fila in data:  # Recorro cada lista dentro de la lista general
    equipo = fila[0]  # El nombre del equipo se encuentra en la primera posición
    puntos = fila[-1]  # Los puntos se encuentran en la última posición
    if equipo == "Equipo":
        continue
    print(f"<li>{equipo}: {puntos}</li>")  # Pinto un elemento de lista (li) con el nombre del equipo y los puntos

print("</ul>")  # Finaliza la lista desordenada (ul)
print("<br />")

###############################################################################

# TABLA CON SOLO EL PRIMER Y ULTIMO CAMPO

print("<table border='1' style='border-collapse:collapse'>") 

for fila in data:
    print("<tr>")
    equipo = fila[0]
    puntos = fila[-1]
    #   Para que no aparezca el real madrid y sumar puntos FCB
    if equipo == "Real Madrid CF":
        continue
    if equipo == "FC Barcelona":
        puntos = int(puntos) + 20
    #    
    print(f"<td>{equipo}</td><td>{puntos}</td>")
    print("</tr>")

print("</table>") 

