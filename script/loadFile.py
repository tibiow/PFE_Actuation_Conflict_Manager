import sys


path_to_file = sys.argv[1]

file = open(path_to_file,"r")
print file.read()


file.close()