import mysql.connector
import sys

class ej6_BD:
    def __init__(self):
        # Con el método __init__, creamos una instancia de la clase BDVideojuegos y establecemos la conexión a la base de datos al mismo tiempo.
        self.bdconx = self.conectar_bd()

    def conectar_bd(self):
        # Esta función se encarga de establecer la conexión con la base de datos y devuelve el objeto de conexión.
        return mysql.connector.connect(
            host="localhost",
            user="clinica",
            password="clinica",
            database="clinica"
        )
    
    def ejecutar_consulta(self, consulta):
        # Esta consulta muestra datos simplemente, no puede modificar ni borrar nada
        #   ya que no tiene commit()
        mi_cursor = self.bdconx.cursor()
        resultado = None
        try:
            mi_cursor.execute(consulta)
            # Leemos todos los resultados antes de cerrar el cursor
            resultado = mi_cursor.fetchall()
            return resultado
        except Exception as e:
            sys.stderr.write(f"Error en la consulta: {str(e)}")
        finally:
            mi_cursor.close()

    def todos(self):
        # Esta función devuelve todos los equipos en la base de datos, ordenados por puntuacion de mas a menos.
        consulta = "SELECT * FROM pacientes ORDER BY puntuacion DESC"
        return self.ejecutar_consulta(consulta)
    

    def con_filtro(self, filtro):
        # Esta función devuelve los equipos que coinciden con un filtro dado, ordenados por nombre.
        consulta = f"SELECT * FROM pacientes {filtro}"
        return self.ejecutar_consulta(consulta)
    

    def insertar(self,fecha_cita,hora_cita,consulta,id_paciente):
        #   cursor: objeto para generar peticiones a la base de datos
        mi_cursor = self.bdconx.cursor() 
        #   Crear el texto de la consulta
        query = "INSERT INTO citas_medicas (fecha_cita,hora_cita,consulta,id_paciente) VALUES (%s,%s,%s,%s)"
        #necesitamos los valores para insertarlos, los guardamos en una tupla 
        val = (fecha_cita,hora_cita,consulta,id_paciente)
        #   Ejecutar la consulta
        mi_cursor.execute(query,val)

        self.bdconx.commit()

        #   Cerramos el cursor 
        mi_cursor.close()
