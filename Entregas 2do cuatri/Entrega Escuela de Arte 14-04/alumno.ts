import { Persona } from './persona';
import { Escuela } from './escuela';

export class Alumno extends Persona {
    private nro_legajo: number;

    constructor(nombre: string, apellido: string, fecha_nacimiento: Date, dni: number) {
        super(nombre, apellido, fecha_nacimiento, dni);
        this.nro_legajo = Escuela.contadorLegajoAlumnos++;
    }

    listarInfo(): void {
        console.log(`--- Alumno ---`);
        console.log(`Numero de Legajo:\t${this.nro_legajo}`);
        super.listarInfo()
    }

    getLegajo():number{
        return this.nro_legajo;
    }

}