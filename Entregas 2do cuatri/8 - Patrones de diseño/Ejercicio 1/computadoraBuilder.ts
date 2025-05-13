import { Comptutadora } from "./computadora";

export class ComputadoraBuilder {
    private procesador: string;
    private ram: number;
    private almacenamiento: number;
    private tarjGrafica: string;
    private so: string;

    setProcesador(procesador: string): ComputadoraBuilder {
        this.procesador = procesador;
        return this;
    }
    setRAM(ram: number): ComputadoraBuilder {
        this.ram = ram;
        return this;
    }
    setAlmacenamiento(almacenamiento: number): ComputadoraBuilder {
        this.almacenamiento = almacenamiento;
        return this;
    }
    setTarjGrafica(tarjGrafica: string): ComputadoraBuilder {
        this.tarjGrafica = tarjGrafica;
        return this;
    }
    setSo(so: string): ComputadoraBuilder {
        this.so = so;
        return this;
    }

    build(): Comptutadora {
        return new Comptutadora(this.procesador, this.ram, this.almacenamiento, this.tarjGrafica, this.so);
    }
}