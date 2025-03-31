export function llenarArreglo(arr: number[], maxNum: number): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number((Math.random() * maxNum + 1).toFixed(0));
    }
}

export function crearArregloNumerico(lenght: number): number[] {
    let arreglo: number[] = new Array(lenght);
    return arreglo;
}

export function intercambiar(arreglo: number[], pos1: number, pos2: number): void {
    const aux: number = arreglo[pos1];
    arreglo[pos1] = arreglo[pos2];
    arreglo[pos2] = aux;
}

export function esMayor(n1: number, n2: number): boolean {
    //console.log(`Comparando ${n1} con ${n2}...`)
    return n1 > n2
}

export function imprimirArreglo(arr: number[]): void {
    let vector: string = '';
    for (let i = 0; i < arr.length; i++) {
        vector += `${arr[i]} `
    }
    console.log(vector);
}

export function ordenamientoBurbuja(arreglo: number[]): void {
    let len: number = arreglo.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (esMayor(arreglo[j], arreglo[j + 1])) {
                intercambiar(arreglo, j, j + 1);

            }
        }
    }
}

export function ordenamientoBurbujaInverso(arreglo: number[]): void {
    let len: number = arreglo.length;
    for (let i = len; i > 0; i--) {
        for (let j = len-1; j > 0; j--) {
            if (esMayor(arreglo[j], arreglo[j - 1])) {
                intercambiar(arreglo, j, j - 1);
            }
        }
    }
}

export function ordenamientoSeleccion(arreglo: number[]): void {
    let pos: number;
    let len: number = arreglo.length;
    for (let i = 0; i < len - 1; i++) {
        pos = i;
        for (let j = i + 1; j < len; j++) {
            if (esMayor(arreglo[pos], arreglo[j])) {
                pos = j;
            }
        }
        intercambiar(arreglo, i, pos)
    }
}
