import * as rs from 'readline-sync';

const separador = ():void => {
    console.log(`---------`);
}
function llenarArreglo(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = rs.questionInt(`Ingresa el valor para la posicion ${i}: `);
    }
}

function imprimirAlReves(arr: number[]): void {
    //Si arr.length = 5, entonces hacemos que i se ubique en la ultima posicion del arreglo (4)
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(`Posicion ${i} = ${arr[i]}`);
    }
}

function main(): void {
    const SIZE: number = rs.questionInt(`Ingresa la longitud del arreglo: `);
    let A: number[] = new Array(SIZE);
    llenarArreglo(A);
    separador();
    imprimirAlReves(A);
}

main();