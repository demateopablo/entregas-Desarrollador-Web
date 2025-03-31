import esMultiplo from './esMultiploFunc';

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

export default contarDivisores;