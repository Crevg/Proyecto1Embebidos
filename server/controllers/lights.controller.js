/* Get methods */

module.exports.signalsStatus = (req, res) => {
    lights = [
        {
          name: "Cuarto 1",
          state: 0,
        },
        {
          name: "Cuarto 2",
          state: 0,
        },
        {
          name: "Comedor",
          state: 1,
        },
  
        {
          name: "Cocina",
          state: 0,
        },
  
        {
          name: "Sala",
          state: 1,
        },
      ];
    res.status(200).send({
        message: "Success",
        data: lights
    });
}

/*Put methods */

module.exports.updateSignal = (req, res) => {
    const name = req.body.name;
    const state = req.body.state; 
    //USE LIBRARY TO CHANGE STATE
    //check for errors
    if (true){
        res.send({
            message: "Success",
            data: {name: name, state: (state===1?0:1)}
        }).status(200)
    }else{
        res.send({
            message: "Error",
            error: "Couldn't work with library",
            data: {name: name, state: state}
        }).status(500);
    }
}