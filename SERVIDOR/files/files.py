#!C:\Users\Kras\AppData\Local\Programs\Python\Python311\python.exe

print("Content-type: text/plain\n")

import os, shutil

ruta = "docs/text.doc"
nueva_ruta = "docs2/copy_text.doc"

#   Read file
"""
try:    
    with open("docs/text.doc") as ruta:
        print(ruta.read())
except FileNotFoundError as e:
    print(e)
    print("File not found")
except Exception as e:
    print(e)
    print("Error")
"""

#   write a new line
"""
try:
    with open(ruta,"a") as file: #  if u wanna overwrite the file, change "a" for "w"
        file.write("\nNombre: Macayo; Edad: 26 años; Localidad: Valdemoro")
except Exception as e:
    print(e)
"""


#   Read files line by line with for
"""
try:
    with open(ruta) as file:
        for line in file:
            print(line)

except Exception as e:
    print(e)
"""

#   Check oldest guy in the file
"""
age = None
ages = []
try:
    with open(ruta) as file:
        for line in file:
            data = line.split(";")
            for item in data:
                if item.startswith("Edad:"):
                    age = item.split(':')[1].strip()   
            if age is not None:
                age = int(age)
                ages.append(age)
    
    if ages:
        ages.sort()
        oldest_guy = ages[-1]
        print("The oldest person is", oldest_guy, "years old")
    else:
        print("No age info")

except Exception as e:
    print(e)
"""

#   Copy file to other directory
"""
shutil.copyfile(ruta,nueva_ruta)#   only copies content of a file
shutil.copy(ruta,nueva_ruta)    #   copyfile() + permission mode + destination can be a directory
shutil.copy2(ruta,nueva_ruta)   #   copy() + copies metadata
"""

#   Move file from directory
"""
print
source = "C:\\xampp\\htdocs\\DAW\\SERVIDOR\\files\\docs2\\copy_text.doc"
destination = "C:\\xampp\\htdocs\\DAW\\SERVIDOR\\files\\docs\\copy_text.doc"

try:
    os.replace(source, destination)
    print(source, "was moved")
    
except FileNotFoundError as e:
    print("File not found:", e)
except PermissionError as e:
    print("Permission error:", e)
except Exception as e:
    print("An error occurred:", e)
"""