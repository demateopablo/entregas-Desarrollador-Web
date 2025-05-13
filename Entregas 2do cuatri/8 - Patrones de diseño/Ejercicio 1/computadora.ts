export class Comptutadora {
    private procesador: string;
    private ram: number;
    private almacenamiento: number;
    private tarjGrafica: string;
    private so: string;

    constructor(procesador: string, ram: number, almacenamiento: number, tarjGrafica: string, so: string) {
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.tarjGrafica = tarjGrafica;
        this.so = so;
    }

    toString(): string {
        return `Especificaciones de la Computadora:
Procesador: ${this.procesador},
RAM: ${this.ram},
Almacenamiento: ${this.almacenamiento},
Tarjeta gráfica: ${this.tarjGrafica},
SO: ${this.so}`
    }
}