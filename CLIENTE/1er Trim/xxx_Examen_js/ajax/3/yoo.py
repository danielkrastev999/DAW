#!C:\Users\Kras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\python.exe

# Este script de Python (yoo.py) lee el contenido del archivo "data.json"
# y lo devuelve como respuesta HTTP con formato JSON.

# Importar el módulo json
import json

# Abrir el archivo "data.json" en modo lectura
with open("data.json") as file:
    # Cargar el contenido JSON del archivo en la variable 'data'
    data = json.load(file)
    # Imprimir el encabezado HTTP indicando que el contenido será de tipo texto/html
    print("Content-type: text/html\n")
    # Imprimir el contenido JSON convertido a una cadena
    print(json.dumps(data))



