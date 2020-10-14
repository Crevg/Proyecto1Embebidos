from flask import Flask
from flask import request
from ctypes import *
from modelos.Cuarto import Cuarto
from flask_cors import CORS

path = "../Clib/libmylib.so"
funciones = CDLL(path)
app = Flask(__name__)
CORS(app)


luces = [Cuarto("Cuarto 1", 1, 0), Cuarto("Cuarto 2", 2, 0), Cuarto("Comedor", 3, 0), Cuarto("Sala", 4, 0), Cuarto("Cocina", 5, 0)]
puertas = [Cuarto("Cuarto 1", 1, 0), Cuarto("Cuarto 2", 2, 0), Cuarto("Front", 3, 0), Cuarto("Back", 4, 0)]
#Json
def lucesJson():
    return list(map(lambda cuarto: {"name": cuarto.getNombre(), "state": cuarto.getEstado()}, luces))

def puertasJson():
    return list(map(lambda cuarto: {"name": cuarto.getNombre(), "state": cuarto.getEstado()}, puertas))



#Rutas luces

#Obtiene el estado de las luces
@app.route('/lights/signalsStatus',  methods=["GET"]) #GET
def obtenerLuces():
    return {"message": "Success", "data": lucesJson()}
    

#Actualiza el estado de una luz
@app.route('/lights/updateSignal', methods=["PUT"]) #PUT
def actualizarLuz():
    req_data = request.get_json()
    nombre = req_data["name"]
    estado = req_data["state"]
    luz = filter(lambda cuarto: cuarto.nombre == nombre, luces )
    id_cuarto = (list(luz)[0].id)
    if (estado == 0):
        funciones.encender_luz(id_cuarto)
        actualizarLuxAux(id_cuarto, 1)
        return {"message": "Success", "data": lucesJson()}
    else:
        funciones.apagar_luz(id_cuarto)
        actualizarLuxAux(id_cuarto, 0)
        return {"message": "Success", "data": lucesJson()}

#Funciona auxiliar que actualiza el estado de una luz
def actualizarLuxAux(id_cuarto, estado):
    for cuarto in luces:
        if cuarto.id == id_cuarto:
            cuarto.setEstado(estado)

#Funciona auxiliar que actualiza el estado de todas las luces
def actualizarLuxAux_2(estado):
    for cuarto in luces:
        cuarto.setEstado(estado)

#Apaga todas las luces
@app.route('/lights/turnAllOff', methods=["PUT"]) #PUT
def apagarTodas():
    funciones.apagar_todo()
    actualizarLuxAux_2(0)
    return {"message": "Success", "data": lucesJson()}


@app.route('/lights/turnAllOn', methods=["PUT"]) #PUT
def encenderTodas():
    funciones.encender_todo()
    actualizarLuxAux_2(1)
    return {"message": "Success", "data": lucesJson()}




#Rutas puertas


@app.route('/doors/signalsStatus',  methods=["GET"]) #GET
def obtenerPuertas():
    puerta_1 = funciones.leer_puerta(1)
    puerta_2 = funciones.leer_puerta(2)
    puerta_3 = funciones.leer_puerta(3)
    puerta_4 = funciones.leer_puerta(4)
    puertas[0].setEstado(puerta_1)
    puertas[1].setEstado(puerta_2)
    puertas[2].setEstado(puerta_3)
    puertas[3].setEstado(puerta_4)
    return {"message": "Success", "data": puertasJson()}





#Rutas autenticacion


@app.route('/auth/login', methods=["POST"]) #POST
def login():
    req_data = request.get_json()
    user = req_data["user"]
    passw = req_data["pass"]
    file = open("./modelos/auth.txt", 'r')
    credentials = file.read().splitlines()
    file.close()
    if user==credentials[0] and passw==credentials[1]:
        return {"message": "Success", "data": True}
    else:
        return {"message": "Success", "data": False}
    
   


#Rutas camara


@app.route('/cam/photo',  methods=["POST"]) #POST
def photo():
    return ""



""" 


@app.route('/clib')
def clibrary():
    path = "../Clib/libmylib.so"
    f = CDLL(path)
    print(type(f))

    a = f.leer_puerta(1)
    print(a)
    return { "data": a}

 """

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')