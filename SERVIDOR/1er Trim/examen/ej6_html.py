def listarCitasInicio(paciente):
    print(f'''
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
          <h3>{paciente} tiene cita en:</h3>
            <ul>         
    ''')


def listarCitasFinal():
    print('''
            </ul>
        </body>
        </html>
        ''')
    
def salidaPrincipal(citas):
    listarCitasInicio()

    for cita in citas:
        print(f'<ol>{cita}</ol>')

    listarCitasFinal()

def citaApuntada():
    print('''
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="refresh" content="1;ej6.html"> <!--recarga pag a los 2 seg-->
            <title>Login con registro en fichero</title>
          <link rel="stylesheet" href="css/style.css">
            </head>

        <body>
                <h2>Cita Registrada</h2>
        </body>
        </html>
          ''')