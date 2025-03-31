import * as rs from 'readline-sync';

const separador = ():void => {
    console.log(`----------`)
}

function llenarArreglo(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = rs.questionInt(`Ingresa el num. de la posicion ${i}: `);
    }
}

function sumarArreglos(arrA: number[], arrB: number[]): number[] {
    let newArr: number[] = new Array(arrA.length); //
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = arrA[i] + arrB[i];
    }
    return newArr;
}

function imprimirArreglo(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Posicion ${i}: ${arr[i]}`);
    }
}

function main(): void {
    const SIZE: number = 6;
    let A: number[] = new Array(SIZE);
    let B: number[] = new Array(SIZE);

    llenarArreglo(A);
    separador();
    llenarArreglo(B);
    separador();

    const C: number[] = sumarArreglos(A, B);

    console.log(`Arreglo A:`)
    imprimirArreglo(A);
    separador();
    console.log(`Arreglo B:`)
    imprimirArreglo(B);
    separador();
    console.log(`Arreglo C:`)
    imprimirArreglo(C);
}

main();