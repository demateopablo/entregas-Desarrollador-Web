import { IPago } from "./iPago";

export class Transferencia implements IPago {
  private cbuDestino: string;
  private monto: number;
  private bancoOrigen: string;

  constructor(cbuDestino: string, monto: number, bancoOrigen: string = "Banco Nación") {
    this.cbuDestino = cbuDestino;
    this.monto = monto;
    this.bancoOrigen = bancoOrigen;
  }

  procesarPago(): void {
    console.log(`Iniciando transferencia de $${this.monto} desde ${this.bancoOrigen} al CBU ${this.cbuDestino}...`);
    console.log("Transferencia procesada exitosamente.");
  }

  cancelarPago(): void {
    console.log("La transferencia fue cancelada.");
  }

  generarRecibo(): void {
    console.log(`Se transfirieron $${this.monto} al CBU ${this.cbuDestino} desde ${this.bancoOrigen}.`);
  }
}
