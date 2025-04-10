import { SmartHeladera } from './smartHeladera'
import { ModuloWifi } from './moduloWifi'

let moduloWifi1:ModuloWifi = new ModuloWifi(520,2.4) 
let smartHeladera1:SmartHeladera = new SmartHeladera('Patrick','J5281LA',moduloWifi1);


//Encender de Heladera Smart
smartHeladera1.encender();
//Cambiar la temperatura
smartHeladera1.cambiarTemperatura(3);
//Conectarse a internet
smartHeladera1.conectarAInternet();
//Mostrar información
console.log(smartHeladera1.mostrarInfo());
