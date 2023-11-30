#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

#   Este python obtiene de una lista ya creada, las descripciones de unos prductos

descripciones_productos = [
    "Descripcion del Producto 1:Esta es la descripcion del primer producto",
    "Descripcion del Producto 2:Aqui se encuentra la descripcion del segundo producto",
    "Descripcion del Producto 3:Esta es la tercera descripcion de un producto",
    "Descripcion del Producto 4:Cuarta descripcion de un producto de la lista",
    "Descripcion del Producto 5:La ultima descripcion corresponde al quinto producto"
]

#   Inicializo una lista vacia donde guardare todos los datos separados de la lista anterior por un :
lista_descripciones = []

#   Recorro la lista y la guardo en una nueva, separando los elementos y asegurandome que no queden espacios
for descripcion in descripciones_productos:
    lista_descripciones += descripcion.strip().split(":")
    
#   Comprobacion de que he metido todos los elementos en una lista
#print(lista_descripciones)

#   Codigo cabecera del HTML
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
#   Codigo final del HTML
finHTML = '''
            </body>
        </html>
        '''
#   pinto el inicio
print(inicioHTML)

#   util para los atb de los divs
prod = 1

#   recorro la lista elemento por elemento
for elemento in lista_descripciones:
    #   si la lista contiene este texto...
    if "Descripcion del Producto" in elemento:
        #   abro un div en el que inserto la variable de producto al final del id=producto, para poder contarlos
        print(f"<div id='producto{prod}'>")
        #   aumento la variable producto en 1 para que el sigueinte sea el 2 y asi sucesivamente
        prod+=1
    else:
        #   pinto la descripcion del producto dentro de un 'p' usando format 
        print(f"<p>{elemento}</p>")
    #   cierro el div
    print("</div>")
#   pinto el final del html 
print(finHTML)