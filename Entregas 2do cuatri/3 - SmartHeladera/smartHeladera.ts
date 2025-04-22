import { Heladera } from './heladera';
import { ModuloWifi } from './moduloWifi';

export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;

    constructor(marca: string, modelo: string, moduloWifi: ModuloWifi) {
        super(marca, modelo);
        this.moduloWifi = moduloWifi;
    }
    public conectarAInternet(): void {
        this.moduloWifi.conectarAInternet();
    }

    public mostrarVelocidadDeConexion(): number {
        return this.moduloWifi.getVelocidad();
    }

    public mostrarInfo(): string {
        return `${super.mostrarInfo()}\nWiFi:\t${this.moduloWifi.getVelocidad()} Mbps - ${this.moduloWifi.getFrecuencia()} GHz`;
    }
}