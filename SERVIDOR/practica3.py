#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

#   No hay declaracion de vriables
#   Una variable se crea con la primera asignacion
numero = 5
texto = "5"
print(numero)
print(type(numero))

print(texto)
print(type(texto))


numero = str(5)    # Cambio el contenido y el tipo de la variable

print(numero)
print(type(numero))

#   Las variables son case sensitive
a = 5
A = 10
print(a)
print(A)

#   Asignacion multiple
x, y, z = "Orange", "Banana", "Cherry" # Si falta alguno o sobra, no se producen asignaciones
print(x)
print(y)
print(z)

#   Un valor para varias variables
x = y = z = "Orange"
print(x)
print(y)
print(z)

#   Unpack a collection
fruits = ["apple", "pineapple", "watermelon"]
x,y,z = fruits
print(x)
print(y)
print(z)

#   Imprimir con comas y sin
x = "Orange"
y = "Banana"
z = "Cherry"
print(x + y + z) #  Salen en linea pero sin espacio
print(x, y, z)   #  Salen en una linea pero separados por espacio