import { IPago } from "./iPago";

export class MercadoPago implements IPago {
    private entidadDestino: string;
    private qr: string; //podria ser un string del qr en base 64
    private monto: number;

    constructor(qr: string, monto: number) {
        this.qr = qr;
        this.monto = monto;
    }

    procesarPago(): void {
        this.entidadDestino = this.obtenerEntidadDestino(this.qr);
        console.log(`Destinatario: ${this.entidadDestino}. Monto: $${this.monto}`);
        console.log(`¡Pago Exitoso!`);
    }
    
    cancelarPago(): void {
        console.log("El pago ha sido cancelado")
    }
    
    generarRecibo(): void {
        console.log(`Pagaste $${this.monto} a ${this.entidadDestino}.`)
    }
    
    obtenerEntidadDestino(qr:string){
        console.log(`Leyendo el QR: {{img→${qr}}}.`);
        //procesamiento para detectar entidad de destino
        console.log(`Destinatario encontrado.`)
        return "Banco Galicia";
    }
}