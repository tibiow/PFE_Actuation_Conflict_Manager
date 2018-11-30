import sys
from shutil import copyfile


path_from = sys.argv[1]
path_to_file = sys.argv[2]


copyfile(path_from, path_to_file)