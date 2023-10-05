#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/html\n")

import os 
from urllib.parse import parse_qs

#   Recuperar datos desde html para poder guardarlos en variables
param = parse_qs(os.environ.get("QUERY_STRING"))

#   la variable texto contiene el valor introducido en el formulario
texto = param["texto"][0]
palabra = param["palabra"][0]


#   Funciones
def inicioHTML(): #     Devuelve al cielnte el inicio del HTML
    #     Pintamos en una nueva pagina el resultado del split
    print("""
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculadora</title>

            <!-- Latest compiled and minified CSS -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">

            <!-- Latest compiled JavaScript -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        </head>

        <body>
            <div style="border: 1px solid black; margin: 2em; padding:2em; box-shadow: 10px 20px 8px 5px #cfe4ee; border-radius: 1em ">
            <h1 style="text-align: center; text-decoration: underline; text-size: 5em">RESULTADO</h1>
            <h3 style="text-align: center; font-size: 24px; margin: 20px">
            """)

def finHTML(): #        Devuelve al cliente el final del HTML
    print("""
            </h3>
            </div>
            </body>
        </html>
            """)

def separaLetrasLineas(texto): #    Le paso a la funcion el texto para hacer el split
    for letra in texto:
        print(letra+"<br />")

def contarLetras(txt):
    cont = 0
    for letter in txt.upper(): # si ponemos txt.upper nos ahorramos comprobar las minusculas
        if letter >= "A" and letter <= "Z":
            cont += 1
        # casos particulares de letras
        if letter == "ñ": #     tambien se podrian añadir las letras con tilde
            cont += 1
    print(cont)

def letrasReves(txt):
    print(txt[::-1]) #BIMBIMBAMBAM
    #   tam = len(txt)
    #   salida=""
    #   for pos in range(tam):
    #       salida += txt[tam - pos - 1]
    #   print(salida)

def buscarPalabra(palabra, txt): 
    return palabra in txt
    


#   La salida que se envia al cliente
#   -----------------------------------
inicioHTML()
#   Todo lo que vayamos a hacer debera estar en medio
separaLetrasLineas(texto)
print("<hr />")
contarLetras(texto)
print("<hr />")
letrasReves(texto)
print("<hr />")

#---
if buscarPalabra(palabra, texto):
    print("Palabra encontrada")
else:
    print("Palabra no encontrada")
#---

finHTML()