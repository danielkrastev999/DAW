#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")


import codigoHTML

list1 = [6,14,11,78,5]
list2 = [3,14,22,78,9]
list_same_numbers = []

for i in list1:
    for j in list2:
        if i == j:
            list_same_numbers.append(i)



codigoHTML.inicioHTML()

print(list_same_numbers)

codigoHTML.finalHTML()