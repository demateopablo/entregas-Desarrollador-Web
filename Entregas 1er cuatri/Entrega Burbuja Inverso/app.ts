//let arr: number[] = [9, 5, 7, 3, 2, 4, 8, 1, 6];
import * as helper from './helper';

let A: number[] = helper.crearArregloNumerico(15);

function main() {
    helper.llenarArreglo(A, 15);
    console.log(`Sin ordenar:`)
    helper.imprimirArreglo(A)
    //helper.ordenamientoBurbuja(A);
    //helper.ordenamientoSeleccion(A);
    helper.ordenamientoBurbujaInverso(A);
    console.log(`Ordenado:`)
    helper.imprimirArreglo(A)
}

main();
