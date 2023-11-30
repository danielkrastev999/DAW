#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

productosYPrecios = {
    "ProductoX":45.5,
    "ProductoY":32.0,
    "ProductoZ":18.7,
    "ProductoW":55.3,
    "ProductoV":29.8
}

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

#   Empiezo a crear la tabla y le añado el encabezado
tabla = '<table border="1" style="border-collapse: collapse; text-align: center">\n'
tabla += '<tr><th>Producto</th><th>Precio</th><tr>'

#   Inicializo la variable para sumar todos los precios
total = 0
#   Recorro las claves y los valores del diccionario productosYPrecios
for producto, precio in productosYPrecios.items():
    #   Sumo cada precio al total
    total += precio
    #   Añado a la tabla cada fila, que sera en la primera posicion el nombre del producto y en la segunda el precio
    tabla += f'<tr><td>{producto}</td><td>{precio}</td></tr>'

#   Por ultimo creo una fila mas con el total del todos los productos y cierro la tabla
tabla += f'<tr><td><b>TOTAL</b></td><td>{total}</td></tr>'
tabla += '</table>'


#   Pinto el html con la tabla
print(inicioHTML)
print(tabla)
print(finHTML)