import * as fs from 'readline-sync';

/* Consigna

1. Pedir cantidad de concursantes 
2. Solicitar la puntuación para cada torta de:
   - Sabor
   - Presentacion
   - Dificultad
3. Determinar qué torta tiene mayor puntaje
    - Si hay empate, solo indicar este resultado.
*/

function calcularPuntaje(sabor: number, presentacion: number, dificultad: number):number {
    return sabor + presentacion + dificultad;
}
function pedirValor(valor: string): number {
    let puntaje = 0;
    //Validamos que el valor ingresado este entre 1 y 5
    while (puntaje < 1 || puntaje > 5) {
        puntaje = fs.questionInt(`${valor} (Valores entre 1 y 5): `);
        if(puntaje < 1 || puntaje > 5) {
            console.log(`\nEl puntaje debe ser entre 1 y 5.`)
        }
    }
    return puntaje;
}
function pedirCantParticipantes():number{
    let cant:number = 0;
    while (cant<=0){
        cant = fs.questionInt(`Ingresa la cantidad de participantes: `);
        if(cant<=0){
            console.log(`\nLa cantidad debe ser mayor a cero!`);
        }
    }
    return cant;
}

function determinarGanador() {
    const CANT_PARTICIPANTES: number = pedirCantParticipantes();
    let puntaje: number = 0;
    let puntajeMaximo: number = 0;
    let empate: boolean = false;
    let ganador: number = 0;
    for (let i = 1; i <= CANT_PARTICIPANTES; i++) {
        console.log(`\nIngresa los puntajes del participante N° ${i}`)
        let sabor: number = pedirValor(`Sabor`);
        let presentacion: number = pedirValor(`Presentacion`);
        let dificultad: number = pedirValor(`Dificultad`);
        puntaje = calcularPuntaje(sabor, presentacion, dificultad);
        if (puntaje > puntajeMaximo) {
            puntajeMaximo = puntaje;
            empate = false;
            ganador = i;
        } else if (puntaje == puntajeMaximo) {
            empate = true;
        };
        console.log(`\n------------`)
    }
    if (!empate) {
        console.log(`\nEl ganador es el participante ${ganador} con ${puntajeMaximo} puntos`);
    } else {
        console.log(`Hubo un empate con ${puntajeMaximo} puntos!`);
    }
}

determinarGanador();
