let gulp =  require("gulp")

function holamundo(){
    console.log("Hola Mundo");
}

function adiosmundo(){
    console.log("Adios Mundo");

}


exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;