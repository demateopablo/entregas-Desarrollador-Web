export class ModuloWifi {
    private velocidadMbps: number;
    private frecuenciaGhz: number;

    constructor(velocidadMbps: number, frecuenciaGhz: number) {
        this.velocidadMbps = velocidadMbps;
        this.frecuenciaGhz = frecuenciaGhz;
    }

    public getVelocidad(): number {
        return this.velocidadMbps;
    }
    public getFrecuencia(): number {
        return this.frecuenciaGhz;
    }

    public setVelocidad(velocidad: number): void {
        this.velocidadMbps = velocidad;
    }
    public setFrecuencia(frecuencia: number): void {
        this.frecuenciaGhz = frecuencia;
    }

    public conectarAInternet(): void {
        console.log(`Conectando a internet...`)
        console.log(`Conexion establecida correctamente.`)
    }
}