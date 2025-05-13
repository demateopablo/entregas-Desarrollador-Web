import { FabricaDeAnimales } from "./fabricaDeAnimales";

let fabrica = new FabricaDeAnimales();


try {
    let miPerro = fabrica.crearAnimal("Perro", { raza: "Pitbull", color: "Marron" });
    miPerro.hacerSonido();
}
catch (error) {
    console.log(`Error! → ${error.message}`);
}
try {
    let miGato = fabrica.crearAnimal("Gato", { esArisco: true });
    miGato.hacerSonido();
}
catch (error) {
    console.log(`Error! → ${error.message}`);
}
try {
    let miPajaro = fabrica.crearAnimal("Pajaro", { alimento: "bichos" });
    miPajaro.hacerSonido();
}
catch (error) {
    console.log(`Error! → ${error.message}`);
}
try {
    let miCocodrilo = fabrica.crearAnimal("Cocodrilo", { tieneMuelasDeJuicio:false, leGustaTomarSol:true, hinchaDe:"Newells" });
    miCocodrilo.hacerSonido();
}
catch (error) {
    console.log(`Error! → ${error.message}`);
}