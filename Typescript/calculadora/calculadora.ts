// const operaciones = ['suma', 'resta', 'multiplica', 'divison'];
export type Operaciones = 'suma' | 'resta' | 'multiplica' | 'divison';
type Resultados = number | string;
const calculadora = (a: number, b: number, operacion: Operaciones): number => {

    if (operacion == 'suma') {
        return a + b;
    }
    if (operacion == 'resta') {
        return a - b;
    }
    if (operacion == 'multiplica') {
        return a * b;
    }
    if (operacion == 'divison') {
        if (b == 0) {
            // return 'No se puede dividir por 0';
            throw new Error('No se puede dividir por 0');
        }
        return a / b;
    }

    throw new Error('Operacion no permitida');
}

console.log(calculadora(2, 4, 'suma'));
console.log(calculadora(2, 4, 'resta'));
console.log(calculadora(2, 4, 'multiplica'));
console.log(calculadora(2, 4, 'divison'));