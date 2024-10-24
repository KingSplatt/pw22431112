document.write("Hola Mundo");
console.log("Hola Mundo desde la consola");
console.error("Error en la consola");

//Variables
/* tipo - tipado debil*/
let x;
var y;
const z = 10;
let pr = false;
console.log(x);
console.log(typeof (y));
if (pr) {
    console.log("Es verdadero");
} else {
    console.log("Es falso");
}

let num = 1234123451254125124213;
BigInt(num);
console.log(num);

let cadena = "Hola Mundo";
console.log(cadena);
let cadena2 = "otra cadnea " + z;
console.log(cadena2);

// interpolacion de variables
let cadena3 = `cadena3
puedo poner saltos de linea ${z} ${num}`;
console.log(cadena3);
//Simbolos y objetos
let id = Symbol("id");
console.log(id);
//objeto
let usuario = { nombre: "Juan", edad: 30, [id]: 123 };
console.log(usuario.nombre + " " + usuario[id]);

let variablenulla = null;

const PI = 3.1416;
console.log(PI);

let arreglo = [1, 2, 3, 4, 5];
arreglo.push(6);//agrega al final
arreglo.unshift(0); //agrega al inicio
arreglo.pop(); //elimina el ultimo
arreglo.shift(); //elimina el primero
arreglo.splice(1, 1); //elimina un elemento en la posicion 1
arreglo.splice(1, 0, 10); //agrega un elemento en la posicion 1
arreglo.splice(1, 1, 10); //reemplaza un elemento en la posicion 1
arreglo.indexOf(3); //busca la posicion del elemento
console.log(arreglo);

let objeto = { nombre: "Juan", edad: 30, id: 123 };
console.log(Object.keys(objeto));
console.log(Object.values(objeto));
console.log(Object.entries(objeto));


let nombre = prompt("Ingrese su nombre", "Juan");
alert("Hola " + nombre);
