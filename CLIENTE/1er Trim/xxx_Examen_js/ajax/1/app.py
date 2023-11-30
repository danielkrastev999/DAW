#!C:\Users\Kras\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\python.exe

import json

print("Content-type: text/html\n")

data = [["Daniel",22,"Madrid"],["Andrea",12,"Barcelona"]]

print(json.dumps(data))