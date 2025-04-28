import { MercadoPago } from './mercadoPago';
import { Transferencia } from './transferencia';
import { TarjetaDeCredito } from './tarjetaDeCredito';

let mp = new MercadoPago(`9821e981d1298d1d12d(supuesto QR)`, 5000);
let transf = new Transferencia(`123456789`, 12990, "Banco Santander");
let tarjCredito = new TarjetaDeCredito(445512345678);

console.log(`--- Mercado Pago: ---`)
mp.procesarPago();
mp.cancelarPago();
mp.generarRecibo();


console.log(`\n--- Transferencia: ---`)
transf.procesarPago();
transf.cancelarPago();
transf.generarRecibo();

console.log(`\n--- Tarjeta de Crédito: ---`)
tarjCredito.procesarPago();
tarjCredito.cancelarPago();
tarjCredito.generarRecibo();

