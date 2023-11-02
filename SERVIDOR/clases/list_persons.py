#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe


from person import Person
from student import Student
from professor import Professor

####################### PERSON 1

#   How create a object
per1 = Person('Juan','Rodriguez Garcia',33)



print('Content-type: text/plain\n')

print(per1) #   Si tienes la clase __str__ creada en person.py (toString en java)

#   Modificar un atributo de un objeto
per1.name = "Paco"
per1.email = "dkjdkd@jfjff.com"
print(f'{per1.name} {per1.surname} , {per1.email}')

####################### PERSON 2

#   How create a object
per2 = Person('Ana','Lopez Garcia',43)

#per2.alive = False
if (per2.alive):
    print(per2.full_name())
else:
    print('Dead lol')

######################## STUDENT

student1 = Student("Jose","Garcia Garcia", 18, "DAW")

print(student1)

print(student1.grade_name())


######################## PROFESSOR

professor1 = Professor("Turi", "Enzo", 50,)

professor1.add_assignature("Servidor")
professor1.add_assignature("Cliente")

print(professor1)

for assig in professor1.assignatures_list():
    print(f'-{assig}')
