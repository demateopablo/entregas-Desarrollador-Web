import {Gato} from './gato'
import {Perro} from './perro'
import { Cerdo } from './cerdo';

let miPerro = new Perro();
let miGato = new Gato();
let miCerdo = new Cerdo();

miPerro.tipoDeDieta();
miPerro.moverse();
miPerro.emitirSonido();

miGato.tipoDeDieta();
miGato.moverse();
miGato.emitirSonido();

miCerdo.tipoDeDieta();
miCerdo.moverse();
miCerdo.emitirSonido();