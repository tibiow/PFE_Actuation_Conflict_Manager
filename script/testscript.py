import sys
import requests 
import json

path_to_file = sys.argv[1]

requests_file = open(path_to_file,"r")
requests_list = requests_file.read().split("\n")
	
requests_file.close()

while(len(requests_list) != 0):
	element = requests_list.pop(0)
	r = requests.get(url = element) 
	print( r )