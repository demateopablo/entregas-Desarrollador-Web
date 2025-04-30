import { Animal } from './animal'

export class Gato extends Animal {

    constructor() {
        super(`Gato`,`miau`,`carne`);
    }

    tipoDeDieta(): void {
        console.log(`${this.name} come ${this.food.toLowerCase()}.`);
    }

    emitirSonido(): void {
        console.log(`¡${this.onomatopeia}!`);
    }

}