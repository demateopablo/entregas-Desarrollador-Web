import { Animal } from './animal'

export class Perro extends Animal {

    constructor() {
        super(`Perro`,`guau`,`huesos`);
    }

    tipoDeDieta(): void {
        console.log(`${this.name} come ${this.food.toLowerCase()}.`);
    }

    emitirSonido(): void {
        console.log(`¡${this.onomatopeia}!`);
    }

}