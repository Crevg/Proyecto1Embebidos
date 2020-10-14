/*Esquema de conexion con library */
const ffi = require("ffi-napi")

const LIBPATH = "./Clib/libgpiolib"
const libm = ffi.Library("../Clib/libmylib.so", {
    'encender_luz': [ 'int', [ 'int' ] ],
    'apagar_luz': [ 'int', [ 'int' ] ],
    'encender_todo': [ 'void', [ ] ],
    'apagar_todo': [ 'void', [ ] ],
    'leer_puerta': [ 'int', [ 'int' ] ],
});


module.exports.encenderLuz = (numeroDeLuz) => {
    libm.encender_luz(numeroDeLuz);
    console.log("Encender luz ", numeroDeLuz)
}

module.exports.apagarLuz = (numeroDeLuz) => {
    libm.apagar_luz(numeroDeLuz);
    console.log("apagar luz ", numeroDeLuz)
}

module.exports.encenderTodo = () => {
    libm.encender_todo();
    console.log("Encender todo ")
}

module.exports.apagarTodo = () => {
    libm.apagar_todo();
    console.log("Apagar todo")
}

module.exports.leerPuerta = (numeroDePuerta) => {
    estado = libm.leer_puerta(numeroDePuerta)
    console.log("Leyendo puerta: ...", estado)
}


  