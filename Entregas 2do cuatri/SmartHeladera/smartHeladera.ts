import { Heladera } from './heladera';
import { ModuloWifi } from './moduloWifi';

export class SmartHeladera extends Heladera {
    private moduloWifi: ModuloWifi;

    constructor(marca: string, modelo: string, moduloWifi: ModuloWifi) {
        super(marca, modelo);
        this.moduloWifi = moduloWifi;
    }
    public conectarInternet(): void {
        console.log(`Conectando...`)
        console.log(`Conexion establecida correctamente.`)
    }

    public mostrarVelocidadDeConexion(): number {
        return this.moduloWifi.getVelocidad();
    }
}