"use strict";
let numeros;
numeros = 10;
console.log(numeros);
let arreglosnumeros;
arreglosnumeros = [1, 2, 3, 4, 5];
let arreglostrings;
arreglostrings = ["hola", "mundo"];
let arreglobooleanos;
arreglobooleanos = [true, false, true];
function info(a, b, c, d) {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? '-' : d));
}
info(10, "hola", true);
var TiposUusario;
(function (TiposUusario) {
    TiposUusario[TiposUusario["Administrador"] = 0] = "Administrador";
    TiposUusario[TiposUusario["Moderador"] = 1] = "Moderador";
    TiposUusario[TiposUusario["Invitado"] = 2] = "Invitado";
})(TiposUusario || (TiposUusario = {}));
function usuarios(usuario) {
    console.log("Nombre: " + usuario.nombre + " tipo: " + usuario.tipo + " edad: " + usuario.edad, " ip: " + usuario.ip + " ip secreta: " + usuario.ipsecreta);
}
console.log(usuarios({ nombre: "Juan", edad: 20, tipo: TiposUusario.Administrador, ip: "192.168.4.1", ipsecreta: "algo" }));
let timepo = 70000000;
let anima = "dinosaurio";
let extinto = true;
let mivariable;
mivariable = "cadena";
mivariable = 42;
let animales = ["perro", "gato", "caballo"];
let numeros1 = [1, 2, 3, 4, 5];
let atributos = [];
let numeros2 = [1, 2, 3, 4, 5];
let tupla = [1, "cadena"];
tupla.push(2, "hola");
let tupla2 = [1, ["hola", "mundo"]];
tupla2.push(2, ["hola", "mundo"]);
const chica = 's';
const mediana = 'm';
const grande = 'l';
const extraGrande = 'xl';
var Talla;
(function (Talla) {
    Talla["Chica"] = "s";
    Talla["Mediana"] = "m";
    Talla["Grande"] = "l";
    Talla["ExtraGrande"] = "xl";
})(Talla || (Talla = {}));
const tallaGrande = Talla.Grande;
console.log(tallaGrande);
const estado = 2;
