import { iAnimal } from './iAnimal'
export class Gato implements iAnimal {
    private esArisco: boolean;

    constructor(esArisco: boolean) {
        this.esArisco = esArisco;
    }

    hacerSonido(): void {
        console.log(`El gato hace ¡miauuuu!`);
    }
    mover(): void {
        console.log(`El gato se mueve...`);
    }
}