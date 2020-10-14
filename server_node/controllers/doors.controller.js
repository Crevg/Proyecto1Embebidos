const doors = require('../models/doors')
const gpio = require("./gpio.controller")

/* Get methods */

module.exports.signalsStatus = (req, res) => {
  res.status(200).send({
    message: "Success",
    data: doors.readAllDoors()
  });
}

/* Post */
module.exports.readSignal = (req, res) => {
  const name = req.body.name
  let id = 0
  if (name === "Cuarto 1") {
    id = 1
  }
  else if (name === "Cuarto 2") {
    id = 2
  }
  else if (name === "Front") {
    id = 3
  }
  else if (name === "Back") {
    id = 4
  }
  if (id === 0) {
    res.send({
      message: "Error",
      error: "Couldn't work with library",
      data: { name: name, state: state }
    }).status(500);
  } else {
    let signal = gpio.leerPuerta(id)
    doors.updateDoor(id, signal)

    res.send({
      message: "Success",
      data: { name: name, state: signal }
    }).status(200)
  }
}