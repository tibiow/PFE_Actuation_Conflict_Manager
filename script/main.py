import sys
from scxml.pyscxml import StateMachine


path_to_file = sys.argv[1]
list_element = sys.argv[2]

events = list_element.split(",")

print("******Starting Simulation******")
sm = StateMachine(path_to_file)
sm.start_threaded()

while(len(events) != 0):
	element = events.pop()
	print("** Injecting event:" + element + " **")
	sm.send(element)


print("******Ending Simulation******")
