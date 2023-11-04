#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")


import codigoHTML


list = [12, 23, 5, 29, 92, 64]

#   1. Elimina el último número y añádelo al principio.
#last_number = list.pop()
#list.insert(0,last_number)

#   2. Mueve el segundo elemento a la última posición.
#second_number = list.pop(1)
#list.append(second_number)

#   3. Añade el número 14 al comienzo de la lista.
#list.insert(0,14)

#   4. Suma todos los números de la lista y añade el resultado al final de la lista.
#total = sum(list)
#list.append(total)

#   5. Fusiona la lista actual con la siguiente: [4, 11, 32]
#list2 = [4, 11, 32]
#list.extend(list2)

#   6. Elimina todos los números impares de la lista.
#for numero in reversed(list): # Reversed evita comportamientos extraños al iterar listas
#    if numero % 2 != 0:
#        list.remove(numero)

#   7. Ordena los números de la lista de forma ascendente.
#list.sort()

#   8. Vacía la lista.
#list.clear()




codigoHTML.inicioHTML()

print(list)

codigoHTML.finalHTML()