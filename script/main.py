import sys
from scxml.pyscxml import StateMachine


path_to_file = sys.argv[1]
list_element = sys.argv[2]

file_event = open(list_element,"r")
events = file_event.read().split("\n")

file_event.close()

print("******Starting Simulation******")
sm = StateMachine(path_to_file)
sm.start_threaded()

element = events.pop()
while(len(events) != 0):
	element = events.pop()
	print("** Injecting event:" + element + " **")
	sm.send(element)


print("******Ending Simulation******")
