import { IPago } from "./iPago";

export class TarjetDeCredito implements IPago {
  private cuotas: number;
  private entidad: string;
  private numeroDeTarjeta: number;

  constructor(numeroTarjeta: number) {
    this.cuotas = 12;
    this.entidad = "Visa";
    this.numeroDeTarjeta = numeroTarjeta;
  }

  procesarPago(): void {
    console.log(`La tarjeta numero : ${this.numeroDeTarjeta} pertenece a la entidad: ${this.entidad} y se puede pagar hasta ${this.cuotas} cuotas  `)
  }

  cancelarPago(): void {
    console.log("El pago ha sido cancelado")
  }

  generarRecibo(): void {
    console.log(`La transferencia N° ${this.numeroDeTarjeta} ha sido exitosa`)
  }

}