import { Animal } from './animal'

export class Cerdo extends Animal {

    constructor() {
        super(`Cerdo`, `oink oink`, `verduras`);
    }

    tipoDeDieta(): void {
        console.log(`${this.name} come ${this.food.toLowerCase()}.`);
    }

    emitirSonido(): void {
        console.log(`¡${this.onomatopeia}!`);
    }

}