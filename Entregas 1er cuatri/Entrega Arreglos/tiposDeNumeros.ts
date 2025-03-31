import * as rs from 'readline-sync';

const separador = (): void => {
    console.log(`---------`);
}
function llenarArreglo(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = rs.questionInt(`Ingresa el valor para la posicion ${i}: `);
    }
}

function contarTipos(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            cantCeros++;
        } else if (arr[i] > 0) {
            cantPositivos++
        }
        else {
            cantNegativos++;
        }
    }
}

let cantPositivos: number = 0;
let cantNegativos: number = 0;
let cantCeros: number = 0;

function main(): void {
    const SIZE: number = rs.questionInt(`Ingresa la longitud del arreglo: `);
    let A: number[] = new Array(SIZE);
    llenarArreglo(A);
    separador();
    contarTipos(A);
    console.log(`Positivos: ${cantPositivos}`);
    console.log(`Negativos: ${cantNegativos}`);
    console.log(`Ceros: ${cantCeros}`);
}

main();