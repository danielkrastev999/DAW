#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

#   Este python recoge una lista y se la pasa a una funcion que comprueba
#   que solo esten las letras deseadas 

#   Declaro una lista de letras
letras = ["A","E","I","O","U"]

#   Funcion que recibe por parametros una lista de letras, con la que hara x comprobaciones
#   y devolvera las letras concatenadas si cumple todo, y error si no lo hace 
def concatenaVocales(letras):
    #   Variables que necesitare, una para concatenar la lista y otra con el mensaje que devolvere
    letras_concatenadas = ""
    error = "error"

    #   Si la longitud es mayor que 5, error
    if len(letras) > 5:
        return error
    else:    
        #   si no estan esas letras en la lista, error
        if "A" in letras and "E" in letras  and "I" in letras and "O" in letras and "U" in letras:
            #   Recorro las letras y las concateno al string letras_concatenadas 
            for letra in letras:
                letras_concatenadas += letra
            #   Devuelvo el string con las letras concatenadas
            return letras_concatenadas
        else:
            return error


#   guardo lo que me llega en una variable
letras_con = concatenaVocales(letras)

#   pinto la variable para comprobar que funciona correctamente
print(letras_con)