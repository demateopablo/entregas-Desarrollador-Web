import * as fs from 'readline-sync';
import esMultiplo from './funciones/esMultiploFunc';

function contarDivisores(num: number): number {
    let cant: number = 0;
    for (let i = 1; i <= num; i++) {
        if (esMultiplo(num, i)) {
            cant++;
            console.log(i);
        }
    }
    return cant;
}

let num1: number = fs.questionInt("Ingresa un numero para verificar cuantos divisores tiene: ");
console.log(`La cantidad de divisores de ${num1} es ${contarDivisores(num1)}`);