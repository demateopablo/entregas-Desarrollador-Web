import { Animal } from './animal'

export class Cerdo extends Animal {
    protected food: string;
    protected onomatopeia: string;

    constructor() {
        super(`Cerdo`);
        this.onomatopeia = `Oink Oink`;
        this.food = `Verduras`;
    }

    tipoDeDieta(): void {
        console.log(`${this.name} come ${this.food.toLowerCase()}.`);
    }

    emitirSonido(): void {
        console.log(`¡${this.onomatopeia}!`);
    }

}