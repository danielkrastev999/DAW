#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/plain\n")

import os 
from urllib.parse import parse_qs

#   recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

fig = int(param["figura"][0])
nFil = int(param["nFilas"][0])

#print(fig)
#print(nFil)

def cuadrado(filas):
    print(f"Dibujar un cuadroado de {filas} filas y {filas} columnas")
    for f in range(filas):
        linea="" #  Vacio la linea a cada vuelta de bucle para que no se acumulen 
        for c in range(filas):
            linea += "*"
        print(linea)

    

def triangulo(filas):
    print(f"Dibujar un triangulo de {filas} filas")   
    """
    for f in range(filas): #si "filas" vale 5 me genera -> 0 1 2 3 4 
        linea = ""
        for c in range(f+1): # si f es 0 -> 0 | si f es 1 -> 0,1 | si f es 2 -> 0,1,2
            linea += "*"
        print(linea)
    """   
    for f in range(filas):
        linea = "*" * f
        print(linea)
        linea=""

def trianguloVuelta(filas):
    print(f"Dibujar un triangulo inverso de {filas} filas")   

    #for f in range(filas) # si filas es 5 -> 0 1 2 3 4 
    #   linea = ""
    #   for c in range (filas - f): #con 5-0 -> 0 1 2 3 4 || con 5-1 -> 0,1,2,3 || con 5-2 -> 0,1,2...
    #       linea += "*"
    #   print(linea)

    for f in range(filas,0,-1): #s filas es 5 -> 5,4,3,2,1
        linea = ""
        for c in range(f): #si filas es 5 -> 0,1,2,3,4 || si filas es 4 -> 0,1,2,3...
            linea += "*"
        print(linea) 

def trianguloEspejo(filas):
    for f in range(filas):
        linea = ""
        for c in range(filas-f-1):
            linea += " "
        for a in range(f+1):
            linea += "*"
        print(linea)

def trianguloInversoEspejo(filas):
        for f in range(filas):
            linea = ""
            for c in range(f): 
                linea += " "
            for a in range(filas - f):
                linea += "*"
            print(linea)    


def cuadradoMulti(filas):
    

match fig:
    case 1:
        cuadrado(nFil)
    case 2: 
        triangulo(nFil)
    case 3:
        trianguloVuelta(nFil)
    case 4:
        trianguloEspejo(nFil)
    case 5:
        trianguloInversoEspejo(nFil)
    case 6:
        cuadradoMulti(nFil)
    case 7: 
        triangulo(nFil)
    case 8:
        trianguloVuelta(nFil)
    case 9:
        trianguloEspejo(nFil)
    case 10:
        trianguloInversoEspejo(nFil)
    case _:
        print("no existe esa opcion")



