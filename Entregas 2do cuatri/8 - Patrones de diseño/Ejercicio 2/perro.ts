import { iAnimal } from './iAnimal'
export class Perro implements iAnimal {
    private raza: string;
    private color: string;

    constructor(raza: string, color: string) {
        this.raza = raza;
        this.color = color;
    }

    hacerSonido(): void {
        console.log(`El perro hace ¡guau!`);
    }
    mover(): void {
        console.log(`El perro se mueve...`);
    }
}