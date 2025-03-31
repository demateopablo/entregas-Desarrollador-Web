import { Celular } from './celular';

let cel1 = new Celular("Samsung", "Galaxy S24", "Android", 8, 256, false);
let cel2 = new Celular("Motorola", "E02", "Android", 1);
let cel3 = new Celular("Iphone", "16 Pro", "iOS", undefined, 1024, true);
let cel4 = new Celular("Xiao", "Note 10 Pro", "Android");

console.log(`Marca del Cel 1: ${cel1.getBrand()}`);

console.log(`\nInfo del Cel 2:`);
console.log(cel2.showInfo());

cel3.setStorage(128);
console.log(`\nAlmacenamiento del Cel 3: ${cel3.getStorage()}`);

cel4.setBrand("Xiaomi");
cel4.onOff();
console.log(`\nMarca del Cel 4 (corregida): ${cel4.getBrand()}`);


console.log(`\nEl Cel 4 está encendido? ${cel4.isTurnedOn()}`);


console.log("\nInfo del Cel 3");
console.log(cel3.showInfo())

console.log("\nInfo del Cel 4");
console.log(cel4.showInfo())
