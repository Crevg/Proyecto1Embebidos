/* Get methods */

module.exports.signalsStatus = (req, res) => {
    doors= [
        {
          name: "Cuarto 1",
          state: 0,
        },
        {
          name: "Cuarto 2",
          state: 1,
        },
        {
          name: "Front",
          state: 0,
        },
        {
          name: "Back",
          state: 1,
        },
      ];
    res.status(200).send({
        message: "Success",
        data: doors
    });
}


/*Temporary method to get the door signal when changed need to validate C library */
module.exports.updateSignal = (req, res) => {
    //USE LIBRARY TO CHANGE STATE
    //check for errors
    if (true){
        res.send({
            message: "Success",
            data: {name: "Name", state: "New State"}
        }).status(200)
    }else{
        res.send({
            message: "Error",
            error: "Couldn't work with library",
            data: {name: name, state: state}
        }).status(500);
    }
}