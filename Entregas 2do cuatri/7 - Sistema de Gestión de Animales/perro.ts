import { Animal } from './animal'

export class Perro extends Animal {
    protected food: string;
    protected onomatopeia: string;

    constructor() {
        super(`Perro`);
        this.onomatopeia = `Guau`;
        this.food = `Huesos`;
    }

    tipoDeDieta(): void {
        console.log(`${this.name} come ${this.food.toLowerCase()}.`);
    }

    emitirSonido(): void {
        console.log(`¡${this.onomatopeia}!`);
    }

}