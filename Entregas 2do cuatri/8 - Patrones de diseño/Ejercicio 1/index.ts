import { ComputadoraBuilder } from "./ComputadoraBuilder";
import { Comptutadora } from "./computadora";

let compu1: Comptutadora = new Comptutadora("Ryzen 5", 16, 1024, "RTX 4070", "Win 11");

//console.log(compu1.toString());

let compu2: Comptutadora = new ComputadoraBuilder()
    .setProcesador("Intel I7")
    .setRAM(24).setSo("Win 10")
    .setTarjGrafica("Radeon 1234")
    .setAlmacenamiento(512)
    .build();

console.log(compu2.toString());