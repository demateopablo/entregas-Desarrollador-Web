import { iAnimal } from './iAnimal'
export class Pajaro implements iAnimal {
    private alimento: string;

    constructor(alimento: string = "semillas e insectos") {
        this.alimento = alimento;
    }

    queCome():void{
        console.log(`El pajaro come ${this.alimento}`);
    }
    hacerSonido(): void {
        console.log(`El pajaro hace ¡pio!`);
    }
    mover(): void {
        console.log(`El pajaro se mueve...`);
    }
}