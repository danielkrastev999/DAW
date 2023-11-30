#!C:\Users\zx22student3198\AppData\Local\Programs\Python\Python311\python.exe

import cgi
import cgitb; cgitb.enable()
import os
import csv

form = cgi.FieldStorage()

print("Content-Type: text/html\n")

fileitem = form["filename"]

