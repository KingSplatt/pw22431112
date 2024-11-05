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