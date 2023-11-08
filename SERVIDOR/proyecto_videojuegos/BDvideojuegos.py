import mysql.connector
import sys

#   1. Clase que implementa las operaciones con la base de datos
class BDVideojuegos:
    #   1.1 Constructor del objeto para conectar con la BBDD
    def __init__(self):
        self.bdconx = mysql.connector.connect( 
                    host="localhost",
                    user="videojuegos",
                    password="videojuegos",
                    database="videojuegos")
    
    #   1.2 Pedimos todos los datos y los devolvemos 
    def todosLosVideojuegos(self):
        #   cursor: objeto para generar peticiones a la base de datos
        mi_cursor = self.bdconx.cursor() 

        #   Crear el texto de la consulta
        consulta = "SELECT * FROM videojuegosantiguos ORDER BY nombre ASC"

        #   Ejecutar la consulta
        mi_cursor.execute(consulta)

        #   Obtener las filas de las consulta y guardar en la variable
        mi_resultado = mi_cursor.fetchall() #   fetchall() -> Devuelve lista de tuplas [(,),(,),(,)]

        #   Traza para ver el objeto mi_resultado en el error log
        sys.stderr.write(str(mi_resultado))

        #   Cerramos el cursor 
        mi_cursor.close()

        return mi_resultado
    
#   En 'principal' hacemos pruebas para ver si funciona (paso 2)

    #   5. Filtrar los videojuegos 
    #------------------------
    # Crearemos una funcion Consulta que le pasare el filtro y si esta vacio, que realice la consulta
    # normal, sino que haga la que contiene el where y asi podemos hacerlo en solo 1 funcion
    #------------------------
    def juegosConFiltro(self, filtro):
        #   cursor: objeto para generar peticiones a la base de datos
        mi_cursor = self.bdconx.cursor() 

        #   Crear el texto de la consulta
        consulta = f"SELECT * FROM videojuegosantiguos {filtro} ORDER BY nombre"

        #   Ejecutar la consulta
        mi_cursor.execute(consulta)

        #   Obtener las filas de las consulta y guardar en la variable
        mi_resultado = mi_cursor.fetchall() #   fetchall() -> Devuelve lista de tuplas [(,),(,),(,)]

        #   Traza para ver el objeto mi_resultado en el error log
        sys.stderr.write(str(mi_resultado))

        #   Cerramos el cursor 
        mi_cursor.close()

        return mi_resultado
    
#  Paso 6 en filtros.py

    def borrarPorId(self, id):
        #   cursor: objeto para generar peticiones a la base de datos
        mi_cursor = self.bdconx.cursor() 

        #   Crear el texto de la consulta
        consulta = f"DELETE FROM videojuegosantiguos WHERE id = {id}"

        #   Traza para ver el objeto mi_resultado en el error log
        sys.stderr.write(f"========================={consulta}=============================")

        #   Ejecutar la consulta
        mi_cursor.execute(consulta)

        self.bdconx.commit()

        #   Cerramos el cursor 
        mi_cursor.close()

    def insertar(self, nombre, empresa, tematica, numJug, anio):
        #   cursor: objeto para generar peticiones a la base de datos
        mi_cursor = self.bdconx.cursor() 

        #   Crear el texto de la consulta
        consulta = "INSERT INTO videojuegosantiguos (nombre, empresa, tematica, numero_de_jugadores,publicacion) VALUES (%s,%s,%s,%s,%s)"
        
        #necesitamos los valores para insertarlos, los guardamos en una tupla 
        val = (nombre, empresa, tematica, numJug, anio)


        #   Ejecutar la consulta
        mi_cursor.execute(consulta,val)

        self.bdconx.commit()

        #   Cerramos el cursor 
        mi_cursor.close()


    def seleccionaPorId(self,id):
        #   cursor: objeto para generar peticiones a la base de datos
        mi_cursor = self.bdconx.cursor() 

        #   Crear el texto de la consulta
        consulta = f"SELECT * FROM videojuegosantiguos WHERE id = {id}"

        #   Traza para ver el objeto mi_resultado en el error log
        sys.stderr.write(f"========================={consulta}=============================")

        #   Ejecutar la consulta
        mi_cursor.execute(consulta)

        #fetchone porque solo vamos a traer un resultado
        #te devuelve solo la tupla, sin la lista que envuelve fetchall()
        mi_resultado = mi_cursor.fetchone()

        #   Cerramos el cursor 
        mi_cursor.close()

        return mi_resultado


    def modificar(self, id, nombre, empresa, tematica, numero_de_jugadores, publicacion):
        #crear un cursor para hacer la consulta
        micursor = self.bdconx.cursor()

        #crear el texto de la consulta
        consulta = "UPDATE videojuegosantiguos SET nombre=%s,empresa=%s,tematica=%s,numero_de_jugadores=%s,publicacion=%s WHERE id=%s"
        val = (nombre, empresa, tematica, int(numero_de_jugadores), int(publicacion), int(id))

        #ejecutar la consulta
        micursor.execute(consulta,val)

        self.bdconx.commit()

        #cerrar cursor y conexion
        micursor.close()


    def cerrarBD(self):
        self.bdconx.close()