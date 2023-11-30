#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe


descripciones_productos = [
    "Descripcion del Producto 1:Esta es la descripcion del primer producto",
    "Descripcion del Producto 2:Aqui se encuentra la descripcion del segundo producto",
    "Descripcion del Producto 3:Esta es la tercera descripcion de un producto",
    "Descripcion del Producto 4:Cuarta descripcion de un producto de la lista",
    "Descripcion del Producto 5:La ultima descripcion corresponde al quinto producto"
]

lista_descripciones = []


for descripcion in descripciones_productos:
    lista_descripciones += descripcion.strip().split(":")
    
#Comprobacion de que he metido todos los elementos en una lista
print(lista_descripciones)

inicioHTML = '''
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
            '''

finHTML = '''
            </body>
        </html>
        '''

print(inicioHTML)

#util para los atb de los divs
prod = 1

for elemento in lista_descripciones:
    if "Descripcion del Producto" in elemento:
        #print("==producto: "+elemento)
        print(f"<div id='producto{prod}'>")
        
        prod+=1
    else:
        #print("==descripcion: "+elemento)
        print(f"<p>{elemento}</p>")
    print("</div>")
    
print(finHTML)