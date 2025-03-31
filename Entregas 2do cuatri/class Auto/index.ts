import { Auto } from "./auto";

let marca: string = "Ford";
let modelo: string = "Mondeo";
let anio: number = 2025;
let velocidad_maxima: number = 250;

let auto1 = new Auto(marca, modelo, anio, velocidad_maxima);

marca = "VolksWagen";
modelo = "Up";
anio = 2020;
velocidad_maxima = 180;

let auto2 = new Auto(marca, modelo, anio, velocidad_maxima);

console.log(`Auto 1:\n   Marca: ${auto1.marca}, modelo: ${auto1.modelo}, año: ${auto1.anio}, velocidad máxima: ${auto1.velocidad_maxima}`);
console.log(`Auto 2:\n   Marca: ${auto2.marca}, modelo: ${auto2.modelo}, año: ${auto2.anio}, velocidad máxima: ${auto2.velocidad_maxima}`);

auto2.encender(); //Para acelerar hay que tener el auto encendido
console.log(`Velocidad actual del auto 2: ${auto2.getVelocidad()}`);
auto2.acelerar(40);
console.log(`Velocidad actual del auto 2: ${auto2.getVelocidad()}`);
auto2.frenar(10);
console.log(`Velocidad actual del auto 2: ${auto2.getVelocidad()}`);
