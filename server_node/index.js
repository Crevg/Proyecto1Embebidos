const express = require('express');
var cors = require('cors')
const path = require('path')

const lightRoutes = require("./routes/lights.routes");
const doorsRoutes = require("./routes/doors.routes");
const authRoutes = require("./routes/auth.routes");
const { encenderLuz, encenderTodo, apagarTodo, apagarLuz, leerPuerta } = require('./controllers/gpio.controller');


encenderLuz(1);
apagarLuz(4);
encenderTodo();
apagarTodo();
leerPuerta(3);



const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("LOL");    
})

app.use(express.static('public'));

app.use("/lights", lightRoutes);
app.use("/doors", doorsRoutes);
app.use("/auth", authRoutes);



app.listen( 8000, "192.168.100.40", () => {
    console.log("Listening to port 8000");
})




