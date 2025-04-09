"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smartHeladera_1 = require("./smartHeladera");
var moduloWifi_1 = require("./moduloWifi");
var moduloWifi1 = new moduloWifi_1.ModuloWifi(520, 2.4);
var smartHeladera1 = new smartHeladera_1.SmartHeladera('Patrick', 'J5281LA', moduloWifi1);
//Encender de Heladera Smart
smartHeladera1.endender();
//Cambiar la temperatura
smartHeladera1.cambiarTemperatura(3);
//Conectarse a internet
smartHeladera1.conectarInternet();
//Mostrar información
console.log(smartHeladera1.mostrarInfo());
console.log("----------");
//Imprimo el objeto entero
console.log(smartHeladera1);
