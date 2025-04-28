import { iAnimal } from "./IAnimal";

export abstract class Animal implements iAnimal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    moverse() {
        console.log(`${this.name} se mueve...`)
    }

    abstract emitirSonido(): void;

    abstract tipoDeDieta(): void;
}