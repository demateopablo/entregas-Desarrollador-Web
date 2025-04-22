export class Auto {
    public marca: String;
    public modelo: String;
    public anio: number;
    private velocidad: number;
    public velocidad_maxima: number;
    private encendido: boolean;

    constructor(marca: String, modelo: String, anio: number, velocidad_maxima: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.velocidad_maxima = velocidad_maxima;
        this.velocidad = 0;
        this.encendido = false;
    }

    publicencender(): void {
        if (!this.encendido) this.encendido = true;
    }
    apagar(): void {
        if (this.encendido) this.encendido = false;
    }
    acelerar(vel: number): void {
        if (!this.encendido) return;
        if ((this.velocidad + vel) < this.velocidad_maxima) {
            this.velocidad += vel;
        }
        else this.velocidad = this.velocidad_maxima;
    }
    frenar(vel:number):void{
        if ((this.velocidad - vel) > 0) {
            this.velocidad -= vel;
        } else
        this.velocidad = 0;
    }

    getVelocidad():number{
        return this.velocidad;
    }
    
    getEstaEncendido():boolean{
        return this.encendido;
    }

}