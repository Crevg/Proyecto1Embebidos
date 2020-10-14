const gpio = require("./gpio.controller")
const lights = require("../models/lights")



/* Get methods */
module.exports.signalsStatus = (req, res) => {
  res.status(200).send({
    message: "Success",
    data: lights.readAllLights()
  });
}

/*Put methods */

module.exports.updateSignal = (req, res) => {
  const name = req.body.name;
  const state = req.body.state;
  let id = 0
  if (name === "Cuarto 1"){
      id = 1
  }
  else if (name === "Cuarto 2"){
    id = 2
  }
  else if (name === "Comedor"){
    id = 3
  }
  else if (name === "Cocina"){
    id = 4
  }
  else if (name === "Sala"){
    id = 5
  } 
  if (id === 0) {
    res.send({
      message: "Error",
      error: "Couldn't work with library",
      data: { name: name, state: state }
    }).status(500);
  }else{
    if (state === 1){
      gpio.apagarLuz(id)
      lights.updateLight(id, 0)
    }else{
      gpio.encenderLuz(id)
      lights.updateLight(id, 1)
    }
    light = lights.readLight(id)
    res.send({
      message: "Success",
      data: { name: name, state: light.state}
    }).status(200)
  }
}

module.exports.turnAllOff = (req, res) => {
  gpio.apagarTodo()
  lights.turnAllOff()
  res.send({
    message: "Success",
    data: lights.readAllLights()
  }).status(200)
}


module.exports.turnAllOn = (req, res) => {
  gpio.encenderTodo()
  lights.turnAllOn()
  console.log(lights)
  res.send({
    message: "Success",
    data: lights.readAllLights()
  }).status(200)
}