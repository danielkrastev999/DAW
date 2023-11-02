from person import Person

class Professor(Person):
    def __init__(self, name, surname, age):
        Person.__init__(self,name,surname,age)
        self.assignatures = []

    def __str__(self):
        return f'{self.name} {self.surname} , {self.age}, professor'
    
    def assignatures_list(self):
        return self.assignatures
    
    def add_assignature(self,name_assignature):
        self.assignatures.append(name_assignature)