fs = require('fs')

/*check credentials returns whether user will be able to log in or not*/
module.exports.login = (req, res) => {
    let user = req.body.user;
    let pass = req.body.pass;
    fs.readFile('./models/auth.txt', 'utf-8', function (err, data) {
        if (err) {
            res.send({ message: "Error", data: false }).status(500);
        }
        jsonData = JSON.parse(data)
        if (jsonData.user === user && jsonData.pass === pass) {
            res.send({ message: "success", data: true }).status(200)
        } else {
            res.send({ message: "success", data: false }).status(200)
        }
    });
}

