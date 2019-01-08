# PFE_Actuation_Conflict_Manager

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

In order to run the complete suite of Actuation_Conflict_Manager you need to have python 2 installed on your machine

Simulator need pyscxml module in order to run. You can install it just by doing the following command:
```
pip install pyscxml
```

if you have issue with pip you can find the sources [here](https://github.com/jroxendal/PySCXML) 


End with an example of getting some data out of the system or using it for a little demo

## Running  exemples

In the exemples directory you can find end to end exemples to use every composent.
you can run a test with the python script testscript.py
```
python script/testscript.py exemple/request/test1
```

you'll only get http 200 response for the moment, I have issue getting the real payload of the HTTP response actually.
however with test1 you'll get the result of simulation and model check directly in your current directory.


## Authors

* **Thibaut GONNIN** - [github](https://github.com/tibiow)

