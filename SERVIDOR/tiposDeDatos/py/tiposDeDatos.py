#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os 
from urllib.parse import parse_qs

#   recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

dato = param["dato"][0]

equiposDeFutbolBuenos = "Sporting Barcelona Atletico Rayo"

if dato not in equiposDeFutbolBuenos:
#    print("El equipo {} no es bueno".format(dato))
    print(f"El equipo {dato} no es bueno<br>")
else:
    print(f"El equipo {dato} es bueno<br>")

#   primer indice include, ultimo exclude
print(equiposDeFutbolBuenos[10:15]+"<br />")
#   desde el 0 al 14
print(equiposDeFutbolBuenos[:15]+"<br />")
#   desde la 9 hasta el final
print(equiposDeFutbolBuenos[9:]+"<br />")
#   desde el final
print(equiposDeFutbolBuenos[-5:-1]+"<br />")
#   el caracter 10
print(equiposDeFutbolBuenos[10]+"<br />")
#   cambiar "a" por "1"
print(equiposDeFutbolBuenos.replace("a","1")+"<br />")
#
print(equiposDeFutbolBuenos.replace("ti","0000")+"<br />")
#   Eliminar espacios
print(equiposDeFutbolBuenos.strip())
#   crea un array quitando los espacios
listaEquipos = equiposDeFutbolBuenos.split(" ")
print(listaEquipos)
#   saca la posicion dos del array
print("<br />"+listaEquipos[2])
#   devuelve True o False si es numero o no
print(dato.isdigit())
#   concatenar String con Numero
x = 2
print(dato + str(x)+"<br />")
#   poner comillas dentro de la salida
print("En un lugar de \"La\" Mancha"+"<br />")
#   imprimir la longitud
print(len(equiposDeFutbolBuenos))
#   truncar directamente en una division
print(5//2) #2