#!C:\Users\Kras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\python.exe

import json

with open("data.json") as file:
    data = json.load(file)
    print("Content-type: text/html\n")
    print(json.dumps(data))