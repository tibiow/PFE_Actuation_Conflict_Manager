import sys
import os

path_to_file = sys.argv[1]

dir = os.path.dirname(path_to_file)

sys.stdout.write(dir + "/")
 
sys.stdout.flush()

