export class Electrodomestico {
    protected marca: string;
    protected modelo: string;
    protected estaEncendido: boolean;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
    }

    public endender(): void {
        if (this.estaEncendido) {
            return;
        }
        this.estaEncendido = true;
    }
    public apagar(): void {
        if (!this.estaEncendido) {
            return;
        }
        this.estaEncendido = false;
    }
    public mostrarInfo(): string {
        return `Marca:\t${this.marca}\nModelo:\t${this.modelo}\nActualmente ${this.estaEncendido?'encendido':'apagado'}`;
    }
}