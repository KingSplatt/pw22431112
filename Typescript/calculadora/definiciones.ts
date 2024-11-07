let numeros: number;
numeros = 10;
console.log(numeros);

let arreglosnumeros: number[];
arreglosnumeros = [1, 2, 3, 4, 5];

let arreglostrings: string[];
arreglostrings = ["hola", "mundo"];

let arreglobooleanos: boolean[];
arreglobooleanos = [true, false, true];

function info(a: number, b: string, c: boolean, d?: number): void {
    console.log(a + " " + b + " " + c + " " + (d == undefined ? '-' : d));
}

info(10, "hola", true);
enum TiposUusario {
    Administrador,
    Moderador,
    Invitado
}
type Usuario = {
    nombre: string,
    edad: number,
    tipo: TiposUusario,
    readonly ipsecreta: string
}

type UsuarioRedes = Usuario & {
    ip: string
}
function usuarios(usuario: UsuarioRedes): void {
    console.log("Nombre: " + usuario.nombre + " tipo: " + usuario.tipo + " edad: " + usuario.edad, " ip: " + usuario.ip + " ip secreta: " + usuario.ipsecreta);
}
console.log(usuarios({ nombre: "Juan", edad: 20, tipo: TiposUusario.Administrador, ip: "192.168.4.1", ipsecreta: "algo" }));

//Tipos que solo existen en Typescript
let timepo: number = 70_000_000;
let anima: string = "dinosaurio";
let extinto: boolean = true;

//Tipo any
let mivariable;
mivariable = "cadena";
mivariable = 42;


//Arreglos
let animales: string[] = ["perro", "gato", "caballo"];
let numeros1: number[] = [1, 2, 3, 4, 5];
let atributos: boolean[] = []
let numeros2: Array<number> = [1, 2, 3, 4, 5];

// numeros1.map(x => x.)
//Tuplas
let tupla: [number, string] = [1, "cadena"];
tupla.push(2, "hola");

let tupla2: [number, string[]] = [1, ["hola", "mundo"]];
tupla2.push(2, ["hola", "mundo"]);

//Enum
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extraGrande = 'xl'

// enum Talla {
//     Chica = 2, Mediana, Grande, ExtraGrande
// }

enum Talla {
    Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl'
}

const tallaGrande = Talla.Grande;
console.log(tallaGrande);


//Ponemos const para ocultar la enum del JS
const enum EstadoCargaPagina {
    Sininiciar, Cargando, Exito, Error
}
//Solamente sale la asignacion del valor explicito en JS
const estado = EstadoCargaPagina.Exito;

//Objetos
//Ponemos readonly para que no se pueda modificar el objeto
const objeto: { readonly id: number, nombre: string } = {
    id: 1,
    nombre: ""
}
// objeto.id = 2;
objeto.nombre = 'PW';

const objeto2: { id: number, nombre?: string } = { id: 1 }
objeto2.nombre = 'PW';

const objeto3: { id: number, nombre: string, talla: Talla } = { id: 1, nombre: 'PW', talla: Talla.Grande };

type Persona = {
    id: number,
    nombre: string,
    talla: Talla
}

const objeto4: Persona = { id: 1, nombre: 'PW', talla: Talla.Grande };
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona2 = {
    id: number,
    nombre: string,
    talla: Talla,
    domicilio: {
        numero: number,
        calle: string,
        pais: string
    }
}

const objeto5: Persona2 = { id: 1, nombre: 'PW', talla: Talla.Grande, domicilio: { numero: 123, calle: 'calle', pais: 'Mexico' } }

//Tipado de funciones

function func() { }

const fn1 = (y: number): number => {
    let x = 2
    if (x > 5) {
        return y;
    }
    return 4;
}

const fn2: () => number = () => {
    let x = 2
    if (x > 5) {
        return 2;
    }
    return 4;
}

const fn3: (a: number) => string = (edad: number) => {
    if (edad >= 18) {
        return 'Mayor de edad';
    }
    return 'Menor de edad';
}

//Never
//Se usa cuando necesitamos que la funcion lance un error
function ErrorUsuario1(): never {
    throw new Error('error de usuario');
}
function ErrorUsuario2(): never {
    throw new Error('error de usuario');
}