import * as fs from 'readline-sync';

let base: number = fs.questionInt(`Ingrese la base: `);
let exponente: number = -1
while (exponente<=0){
    exponente = fs.questionInt(`Ingrese el exponente: `);
};

function potencia(base: number, exponente: number): number {
    return Math.pow(base, exponente);
}

console.log(`La potencia de ${base} al ${exponente} es ${potencia(base,exponente)}`);