module.exports.takePicture = (req ,res ) => {
    /* Call library to take pictures */

    if (true){
        res.send({
            message: "Success",
            data: {picture: "image"}
        }).status(200);
    }else{
        res.send({
            message: "Error",
            error: "Couldn't work with library",
        }).status(500);
    }
}
