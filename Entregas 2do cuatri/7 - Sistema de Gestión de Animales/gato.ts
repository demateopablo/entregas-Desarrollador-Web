import { Animal } from './animal'

export class Gato extends Animal {
    protected food: string;
    protected onomatopeia: string;

    constructor() {
        super(`Gato`);
        this.onomatopeia = `Miau`;
        this.food = `Carne`;
    }

    tipoDeDieta(): void {
        console.log(`${this.name} come ${this.food.toLowerCase()}.`);
    }

    emitirSonido(): void {
        console.log(`¡${this.onomatopeia}!`);
    }

}