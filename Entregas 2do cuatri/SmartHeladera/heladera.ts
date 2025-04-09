import { Electrodomestico } from './electrodomestico';

export class Heladera extends Electrodomestico {
    protected temperatura: number;

    constructor(marca: string, modelo: string) {
        super(marca, modelo);
        this.temperatura = 1; //temperatura inicial = 1
    }

    public cambiarTemperatura(nuevaTemp: number): void {
        //temperatura maxima=5, minima=0
        if (nuevaTemp < 0 || nuevaTemp > 5) {
            console.log(`Temperatura incorrecta. Valores permitidos entre 0 y 5`)
            return;
        }
        this.temperatura = nuevaTemp;
    }
}