import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal {
    protected name: string;
    protected food: string;
    protected onomatopeia: string;

    constructor(name: string, onomatopeia: string, food: string) {
        this.food = food;
        this.onomatopeia = onomatopeia;
        this.name = name;
    }

    moverse() {
        console.log(`${this.name} se mueve...`)
    }

    abstract emitirSonido(): void;

    abstract tipoDeDieta(): void;
}