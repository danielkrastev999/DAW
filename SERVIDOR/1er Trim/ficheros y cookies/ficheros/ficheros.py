#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/plain\n")

import os

dir = "datos/"
nombreFich = "palabras.dat"

"""
fich = open(dir + nombreFich)
listaDias = [dia.strip('\n') for dia in fich.readlines()] #recorro la listaDias y a cada dia le quito los \n de cada palabra del array

#listaDias = fich.readlines(5)
#print(listaDias)
print(listaDias)

if "Lunes" in listaDias:
    print("Está la palabra lunes")
"""

"""
#print(contenido) #  Muestra solo la primera linea     
#print(len(contenido)) # Muestra la longitud del fichero

#for contenido in fich: #   Recorrer un fichero y pintar cada linea
#    print(contenido)
"""


"""
while contenido:# mientras tenga contenido..
    print("-"+contenido)
    contenido = fich.readline()
    #break #    Rompe el while y se sale, no ejecuta el else
    #continue # omite el resto de lineas hacia abajo, y vuelve a empezar 
else:
    print("Fin del fichero")
"""
#   Si no existe crea el fichero
#fich = open(dir + nombreFich,"a") #    escribe al final

#   Si no existe, crea el fichero
#fich = open(dir + nombreFich,"w") #    sobreescribe

"""
#   Si no existe, crea el fichero, si esta creado, error
try:
    fich = open(dir+nombreFich, "x") 
    fich.write("\ny vuelta a empezar")  
except FileExistsError as e:
    print(e)
    print("El fichero ya existe")
except Exception as e:
    print(e)
    print("Problema al abrir el fichero")
finally:
    fich.close()
    """
#   directorio actual
print(os.getcwd()) 

#  comprobaer si es un directorio / true es q si lo es
print(os.path.isdir(dir)) #true

#   comprobar si es un fichero
print(os.path.isfile(dir+nombreFich)) #true


print("----------------------------------")
#   Cambiar de directorio
os.chdir(dir)
print(os.getcwd()) 
print(os.path.isfile(nombreFich)) #true