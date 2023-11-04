#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import os
import cgi
import cgitb; cgitb.enable()

#   Obtener los datos del archivo 
form = cgi.FieldStorage()



def crearTablaHTML(nomFich):
    print("Content-Type: text/plain\n")
    print('<table border="1" style="border-collapse: collapse; text-align: center">\n')

    with open(nomFich) as fichero:
        cabecera = fichero.readline().split(";")

        # Aplicar funcion a todos los elementos de una lista
        # Con esta lista, sustituyo la anterior
        cabecera = [ele.strip() for ele in cabecera]
    
        #    CABECERA DE LA TABLA
        print("<tr>")
        for dato in cabecera:
            print(f"<th>{dato}</th>")
        print("</tr>")

        #   RESTO DE LA TABLA
        for linea in fichero:
            print("<tr>")
            for dato in linea.split(";"): # el split devuelve una lista asique podemos hacer el bucle en la misma linea
                print(f"<td>{dato}</td>")
        print("<tr>")
    print("</table>")


fileitem = form["filename"]

#   Comprobar si el fichero ha sido subido
if fileitem.filename:
    #   Obtener el nombre del fichero que me han enviado
    fn = os.path.basename(fileitem.filename)

    #   Escribo en ese fichero el contenido que se ha subido
    open("ficheros/"+fn, "wb").write(fileitem.file.read()) # Se puede cambiar el nombre del nuevo fichero open("img/foto_"+fn, "wb")

    crearTablaHTML("ficheros/"+fn)

