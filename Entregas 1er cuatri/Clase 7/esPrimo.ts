//Extra, solo para probar si salía

import * as fs from 'readline-sync';
import contarDivisores from './funciones/contarDivisoresFunc';

function esPrimo(num: number): boolean {
    return contarDivisores(num) == 0;
}

const num1: number = fs.questionInt("Ingresa un numero para ver si es primo: ");
console.log(`El numero ${num1} es primo? ${esPrimo(num1)}`);