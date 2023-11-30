#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

from BDvideojuegos import BDVideojuegos
import FormVideojuegos
import json


bd = BDVideojuegos()

#   6. Mostrar 
mi_resultado = bd.juegosConFiltro(FormVideojuegos.crearFiltros())

# devolver resultasdo
print(json.dumps(mi_resultado))

 # cerrar conexion base de datos
bd.cerrarBD()